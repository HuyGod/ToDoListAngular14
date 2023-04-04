export class TaskItem {
  constructor(public title: string) {
  }
  ToggleisDone() {
    this.isDone = !this.isDone;
  }
  public isDone = false;
}
