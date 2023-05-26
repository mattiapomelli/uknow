/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface KnowledgeLayerEscrowInterface extends utils.Interface {
  functions: {
    "claim(uint256,address)": FunctionFragment;
    "createTransaction(uint256,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "platformBalance(uint256,address)": FunctionFragment;
    "protocolFee()": FunctionFragment;
    "protocolTreasuryAddress()": FunctionFragment;
    "release(uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setProtocolFee(uint16)": FunctionFragment;
    "setProtocolTreasuryAddress(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claim"
      | "createTransaction"
      | "owner"
      | "platformBalance"
      | "protocolFee"
      | "protocolTreasuryAddress"
      | "release"
      | "renounceOwnership"
      | "setProtocolFee"
      | "setProtocolTreasuryAddress"
      | "transferOwnership",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claim",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "createTransaction",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "platformBalance",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFee",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "protocolTreasuryAddress",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolFee",
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolTreasuryAddress",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createTransaction",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformBalance",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFee",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolTreasuryAddress",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolFee",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolTreasuryAddress",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike,
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Payment(uint256,uint8)": EventFragment;
    "ProtocolFeeUpdated(uint16)": EventFragment;
    "TransactionCreated(uint256,uint256,uint256,address,uint256,uint256,uint16,uint16,uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Payment"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProtocolFeeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionCreated"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PaymentEventObject {
  transactionId: BigNumber;
  paymentType: number;
}
export type PaymentEvent = TypedEvent<[BigNumber, number], PaymentEventObject>;

export type PaymentEventFilter = TypedEventFilter<PaymentEvent>;

export interface ProtocolFeeUpdatedEventObject {
  fee: number;
}
export type ProtocolFeeUpdatedEvent = TypedEvent<
  [number],
  ProtocolFeeUpdatedEventObject
>;

export type ProtocolFeeUpdatedEventFilter =
  TypedEventFilter<ProtocolFeeUpdatedEvent>;

export interface TransactionCreatedEventObject {
  id: BigNumber;
  senderId: BigNumber;
  receiverId: BigNumber;
  token: string;
  amount: BigNumber;
  courseId: BigNumber;
  protocolFee: number;
  originFee: number;
  buyFee: number;
}
export type TransactionCreatedEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
  ],
  TransactionCreatedEventObject
>;

export type TransactionCreatedEventFilter =
  TypedEventFilter<TransactionCreatedEvent>;

export interface KnowledgeLayerEscrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KnowledgeLayerEscrowInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claim(
      _platformId: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    createTransaction(
      _profileId: PromiseOrValue<BigNumberish>,
      _courseId: PromiseOrValue<BigNumberish>,
      _platformId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    platformBalance(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    protocolFee(overrides?: CallOverrides): Promise<[number]>;

    protocolTreasuryAddress(overrides?: CallOverrides): Promise<[string]>;

    release(
      _profileId: PromiseOrValue<BigNumberish>,
      _transactionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setProtocolFee(
      _protocolFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setProtocolTreasuryAddress(
      _protocolTreasuryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  claim(
    _platformId: PromiseOrValue<BigNumberish>,
    _tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  createTransaction(
    _profileId: PromiseOrValue<BigNumberish>,
    _courseId: PromiseOrValue<BigNumberish>,
    _platformId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  platformBalance(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  protocolFee(overrides?: CallOverrides): Promise<number>;

  protocolTreasuryAddress(overrides?: CallOverrides): Promise<string>;

  release(
    _profileId: PromiseOrValue<BigNumberish>,
    _transactionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setProtocolFee(
    _protocolFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setProtocolTreasuryAddress(
    _protocolTreasuryAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(
      _platformId: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    createTransaction(
      _profileId: PromiseOrValue<BigNumberish>,
      _courseId: PromiseOrValue<BigNumberish>,
      _platformId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    platformBalance(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    protocolFee(overrides?: CallOverrides): Promise<number>;

    protocolTreasuryAddress(overrides?: CallOverrides): Promise<string>;

    release(
      _profileId: PromiseOrValue<BigNumberish>,
      _transactionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setProtocolFee(
      _protocolFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setProtocolTreasuryAddress(
      _protocolTreasuryAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    "Payment(uint256,uint8)"(
      transactionId?: null,
      paymentType?: null,
    ): PaymentEventFilter;
    Payment(transactionId?: null, paymentType?: null): PaymentEventFilter;

    "ProtocolFeeUpdated(uint16)"(fee?: null): ProtocolFeeUpdatedEventFilter;
    ProtocolFeeUpdated(fee?: null): ProtocolFeeUpdatedEventFilter;

    "TransactionCreated(uint256,uint256,uint256,address,uint256,uint256,uint16,uint16,uint16)"(
      id?: null,
      senderId?: null,
      receiverId?: null,
      token?: null,
      amount?: null,
      courseId?: null,
      protocolFee?: null,
      originFee?: null,
      buyFee?: null,
    ): TransactionCreatedEventFilter;
    TransactionCreated(
      id?: null,
      senderId?: null,
      receiverId?: null,
      token?: null,
      amount?: null,
      courseId?: null,
      protocolFee?: null,
      originFee?: null,
      buyFee?: null,
    ): TransactionCreatedEventFilter;
  };

  estimateGas: {
    claim(
      _platformId: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    createTransaction(
      _profileId: PromiseOrValue<BigNumberish>,
      _courseId: PromiseOrValue<BigNumberish>,
      _platformId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    platformBalance(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    protocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    protocolTreasuryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    release(
      _profileId: PromiseOrValue<BigNumberish>,
      _transactionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setProtocolFee(
      _protocolFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setProtocolTreasuryAddress(
      _protocolTreasuryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      _platformId: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    createTransaction(
      _profileId: PromiseOrValue<BigNumberish>,
      _courseId: PromiseOrValue<BigNumberish>,
      _platformId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    platformBalance(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    protocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolTreasuryAddress(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    release(
      _profileId: PromiseOrValue<BigNumberish>,
      _transactionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setProtocolFee(
      _protocolFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setProtocolTreasuryAddress(
      _protocolTreasuryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
