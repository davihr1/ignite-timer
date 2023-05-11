import { useContext, useEffect } from 'react'
import { CountdowContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecundsPassed,
    setSecundsPassed,
  } = useContext(CyclesContext)
  const totalSecunds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSecunds = activeCycle ? totalSecunds - amountSecundsPassed : 0

  const minutesAmount = Math.floor(currentSecunds / 60)
  const secundsAmount = currentSecunds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const secunds = String(secundsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${secunds}`
    }
  }, [minutes, secunds, activeCycle])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSecunds) {
          markCurrentCycleAsFinished()
          setSecundsPassed(totalSecunds)
          clearInterval(interval)
        } else {
          setSecundsPassed(secondsDifference)
        }
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [
    activeCycle,
    totalSecunds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecundsPassed,
  ])

  return (
    <CountdowContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{secunds[0]}</span>
      <span>{secunds[1]}</span>
    </CountdowContainer>
  )
}
