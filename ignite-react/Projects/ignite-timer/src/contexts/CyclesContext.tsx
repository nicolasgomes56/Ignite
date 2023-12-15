import { ReactNode, createContext, useReducer, useState } from 'react'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CycleContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
    if (action.type === 'ADD_NEW_CYCLE') {
      return [...state, action.payload.newCycle]
    }

    return state
  }, [])

  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    // setCycles((state) => [...state, newCycle])
    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    // reset()
  }

  function interruptCurrentCycle() {
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return {
    //         ...cycle,
    //         interruptedDate: new Date(),
    //       }
    //     }
    //     return cycle
    //   }),
    // )

    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        id: activeCycleId,
      },
    })

    setActiveCycleId(null)
  }

  function markCurrentCycleAsFinished() {
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return {
    //         ...cycle,
    //         finishedDate: new Date(),
    //       }
    //     }
    //     return cycle
    //   }),
    // )

    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: {
        activeCycleId,
      },
    })
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
