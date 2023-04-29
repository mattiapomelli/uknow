import * as LitJsSdk from "@lit-protocol/lit-node-client";

// @ts-expect-error
const client = new LitJsSdk.LitNodeClient();
const chain = "ethereum";

// Checks if the user has at least 0 ETH
const accessControlConditions = [
  {
    contractAddress: "",
    standardContractType: "",
    chain,
    method: "eth_getBalance",
    parameters: [":userAddress", "latest"],
    returnValueTest: {
      comparator: ">=",
      value: "0",
    },
  },
];

class Lit {
  private litNodeClient: LitJsSdk.LitNodeClient | null = null;

  async connect() {
    await client.connect();
    this.litNodeClient = client;
  }

  async encrypt(message: string) {
    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
      message,
    );

    if (!this.litNodeClient) return;
    const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
      accessControlConditions,
      symmetricKey,
      authSig,
      chain,
    });

    return {
      encryptedString,
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(
        encryptedSymmetricKey,
        "base16",
      ),
    };
  }

  async decrypt(encryptedString: Blob, encryptedSymmetricKey: string) {
    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    if (!this.litNodeClient) return;

    const symmetricKey = await this.litNodeClient.getEncryptionKey({
      accessControlConditions,
      toDecrypt: encryptedSymmetricKey,
      chain,
      authSig,
    });

    const decryptedString = await LitJsSdk.decryptString(
      encryptedString,
      symmetricKey,
    );

    return { decryptedString };
  }

  async encryptToIpfs(data: string) {
    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });

    if (!this.litNodeClient) return;
    const ipfsCid = await LitJsSdk.encryptToIpfs({
      authSig,
      accessControlConditions,
      chain,
      string: data,
      litNodeClient: this.litNodeClient,
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID || "",
      infuraSecretKey: process.env.NEXT_PUBLIC_INFURA_SECRET || "",
    });

    return ipfsCid;
  }

  async decryptFromIpfs(ipfsCid: string) {
    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    if (!this.litNodeClient) return;

    const decryptedString = await LitJsSdk.decryptFromIpfs({
      authSig,
      ipfsCid, // This is returned from the above encryption
      litNodeClient: this.litNodeClient,
    });

    return decryptedString;
  }
}

export const lit = new Lit();