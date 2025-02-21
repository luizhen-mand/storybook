import React, { JSX, useId } from 'react'
import { useState } from 'react'
import type { InputUploadContainerProps, InputUploadRootProps, InputUploadButtonProps } from './types'
import './inputupload.css'

export const InputUploadRoot = ({ children, className, ...props }: InputUploadRootProps): JSX.Element => {
  return (
    <div className={`ds-inputUpload${className ? ` ${className}` : ''}`} {...props}>
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
      className={`ds-inputUpload__container${isDragging ? ' ds-inputUpload__container--dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      {...props}
    >
      {children}
      <label htmlFor={inputId} className='sr-only'>
      </label>
      <input
        id={inputId}
        type='file'
        className='ds-inputUpload__input'
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
    <button className='ds-inputUpload__button' id='upload-button-text' {...props}>
      {children}
    </button>
  )
}

export const InputUpload = {
  Root: InputUploadRoot,
  Container: InputUploadContainer,
  Button: InputUploadButton
}