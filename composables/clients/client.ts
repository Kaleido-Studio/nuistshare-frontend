export interface Client {

}

export class BaseClient implements Client {
  public successNotifier: (msg: string) => void = (_: string) => { }
  public failureNotifier: (msg: string) => void = (_: string) => { }
  public successHook: () => void = () => { }

  public setSuccessNotifier = (notifier: (msg: string) => void) => {
    this.successNotifier = notifier
    return this
  }

  public setFailureNotifier = (notifier: (msg: string) => void) => {
    this.failureNotifier = notifier
    return this
  }

  public setSuccessHook = (hook: () => void) => {
    this.successHook = hook
    return this
  }
}
