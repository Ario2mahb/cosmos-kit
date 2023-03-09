/// <reference types="node" />
import { Callbacks, DownloadInfo, Mutable, Wallet, WalletClient, WalletConnectOptions } from '../types';
import { Session } from '../utils';
import { StateBase } from './state';
import EventEmitter from 'events';
export declare abstract class WalletBase extends StateBase {
    clientMutable: Mutable<WalletClient>;
    emitter?: EventEmitter;
    protected _walletInfo: Wallet;
    callbacks?: Callbacks;
    session?: Session;
    walletConnectOptions?: WalletConnectOptions;
    isActive: boolean;
    constructor(walletInfo: Wallet);
    activate(): void;
    inactivate(): void;
    get client(): WalletClient;
    initingClient(): void;
    initClientDone(client: WalletClient | undefined): void;
    initClientError(error: Error | undefined): void;
    get walletInfo(): Wallet;
    get downloadInfo(): DownloadInfo | undefined;
    get walletName(): string;
    get walletPrettyName(): string;
    get rejectMessageSource(): string;
    get rejectMessageTarget(): string;
    get rejectCode(): number;
    rejectMatched(e: Error): boolean;
    updateCallbacks(callbacks: Callbacks): void;
    disconnect: (callbacks?: Callbacks, sync?: boolean) => Promise<void>;
    setClientNotExist(): void;
    setRejected(): void;
    setError(e?: Error | string): void;
    connect: (callbacks?: Callbacks, sync?: boolean) => Promise<void>;
    abstract initClient(options?: any): void | Promise<void>;
    abstract update(callbacks?: Callbacks): void | Promise<void>;
}
