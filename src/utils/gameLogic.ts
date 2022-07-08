import React, { useState, useEffect } from 'react'
import { useInterval } from '../hooks/useInterval'
import { Field } from '../models/Field'
import { Slope } from '../models/Slope'

const useField = () => {
  const [field] = useState(new Field())
  console.log("new field")
  const [slopes, setSlopes] = useState<Slope[]>()

  useEffect(() => {
    field.update( () => {  //отправляем колбэк для постоянного обновления
      setSlopes(field.slopes)
      // console.log(field.slopes)
    })
  }, [])

  return [
    field,
    slopes
  ]
}

export default useField

