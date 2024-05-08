import { Environment } from 'vitest'

export default <Environment>(<unknown>{
  name: 'prisma',
  async setup() {
    console.log('Setting up prisma environment')

    return {
      teardown() {
        console.log('Tearing down prisma environment')
      },
    }
  },
})
