import React, { useState, useEffect, JSX } from 'react'
import type { SelectRootProps, SelectLabelProps, SelectInputProps, SelectAlertProps } from './types'
import * as SelectRadix from '@radix-ui/react-select'
import styles from './select.module.css'

function SelectRoot({ children, size, className, ...props }: SelectRootProps): JSX.Element {
  return (
    <div
      className={`${styles['ds-select']}${size ? ` ${styles[`ds-select--${size}`]}` : ''}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

function SelectLabel({ children, required, ...props }: SelectLabelProps): JSX.Element {
  return (
    <p
      className={styles['ds-select__label']}
      {...props}
    >
      {children}
      {required && (
        <span className={styles['ds-select__label--required']}>*</span>
      )}
    </p>
  )
}

function SelectInput({ options, value, onValueChange, color, placeholder, search }: SelectInputProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentColor, setCurrentColor] = useState('gray')

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const selectedOption = options.find(option => option.value === value)
    setCurrentColor(selectedOption?.color || 'gray')
  }, [value, options])

  return (
    <SelectRadix.Root value={value} onValueChange={onValueChange}>
      <SelectRadix.Trigger
        className={`${styles['ds-select__trigger']} ${styles[`ds-select__trigger--${color ?? currentColor}`]}`}
        aria-labelledby="select-label"
      >
        <SelectRadix.Value
          placeholder={placeholder}
          className={styles['ds-select__value']}
        />
        <SelectRadix.Icon className={styles.SelectIcon} asChild>
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content
          className={styles['ds-select__content']}
          position="popper"
          sideOffset={0}
        >
          <SelectRadix.Viewport className={styles['ds-select__viewport']}>
            {search && (
              <div className={styles['ds-select__search']}>
                <input
                  type="text"
                  className={styles['ds-select__searchInput']}
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value) }}
                  onKeyDown={(e) => { e.stopPropagation() }}
                />
                <span className={`${styles['ds-select__searchIcon']} material-symbols-outlined`}>
                  search
                </span>
              </div>
            )}
            {filteredOptions.length > 0
              ? (
                filteredOptions.map((option) => (
                  <SelectRadix.Item
                    className={styles['ds-select__item']}
                    key={option.value}
                    value={option.value}
                  >
                    <span className={`${styles['ds-select__itemIcon']} material-symbols-outlined`}>
                      {value === option.value ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                    <SelectRadix.ItemText asChild>
                      <span
                        className={`${styles['ds-select__itemLabel']} ${styles[`ds-select__itemLabel--${option.color || 'gray'}`]}`}
                      >
                        {option.label}
                      </span>
                    </SelectRadix.ItemText>
                  </SelectRadix.Item>
                ))
              )
              : (
                <p className={styles['ds-select__searchMessage']}>Nenhum resultado encontrado.</p>
              )}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}

function SelectSearch({ children, ...props }: SelectLabelProps): JSX.Element {
  return (
    <div
      className={styles['ds-select__search']}
      {...props}
    >
      {children}
    </div>
  )
}

function SelectAlert({ children }: SelectAlertProps): JSX.Element {
  return (
    <p
      className={styles['ds-select__alert']}
    >
      {children}
    </p>
  )
}

export const Select = {
  Root: SelectRoot,
  Label: SelectLabel,
  Input: SelectInput,
  Search: SelectSearch,
  Alert: SelectAlert
}
