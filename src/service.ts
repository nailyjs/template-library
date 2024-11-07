import { ClassWrapper, Container, Service } from '@nailyjs/ioc'

@Service()
export class MyService {
  static getInstance(container: Container): MyService {
    const wrapper = container.getContainer().get(MyService) as ClassWrapper<MyService>
    if (wrapper && wrapper.wrapperType === 'class')
      return wrapper.getClassFactory().getOrCreateInstance()
    return container.createClassWrapper(MyService).getClassFactory().getOrCreateInstance()
  }
}
