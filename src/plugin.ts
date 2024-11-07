import { Container, IocPlugin } from '@nailyjs/ioc'
import { MyService } from './service'

class MyPluginImpl implements IocPlugin {
  name: string = 'my-plugin'

  async beforeRun(container: Container): Promise<void> {
    MyService.getInstance(container)
  }
}

export function MyPlugin(): IocPlugin {
  return new MyPluginImpl()
}
