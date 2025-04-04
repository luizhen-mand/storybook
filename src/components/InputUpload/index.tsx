import React, { JSX, useId, useState } from 'react'
import type { InputUploadContainerProps, InputUploadRootProps, InputUploadButtonProps } from './types'
import styles from './inputupload.module.css'

export const InputUploadRoot = ({ children, className, ...props }: InputUploadRootProps): JSX.Element => {
  return (
    <div className={`${styles.inputUpload} ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

export const InputUploadContainer = ({
  onFilesSelected,
  children,
  ...props
}: InputUploadContainerProps): JSX.Element => {
  const [isDragging, setIsDragging] = useState(false)
  const inputId = useId()

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragging(false)
    const files = Array.from(event.dataTransfer.files)
    onFilesSelected(files)
  }

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    onFilesSelected(files)
  }

  return (
    <div
      className={`${styles.inputUpload__container} ${isDragging ? styles.inputUpload__containerDragging : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      {...props}
    >
      {children}
      <label htmlFor={inputId} className='sr-only'></label>
      <input
        id={inputId}
        type='file'
        className={styles.inputUpload__input}
        multiple
        onChange={handleFileInputChange}
        aria-labelledby='upload-button-text'
        aria-label='Upload file'
        {...props}
      />
    </div>
  )
}

export const InputUploadButton = ({ children, ...props }: InputUploadButtonProps): JSX.Element => {
  return (
    <button className={styles.inputUpload__button} id='upload-button-text' {...props}>
      {children}
    </button>
  )
}

export const InputUpload = {
  Root: InputUploadRoot,
  Container: InputUploadContainer,
  Button: InputUploadButton
}
