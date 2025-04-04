"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect, type JSX } from "react"
import type {
  AvatarProps,
  AvatarImageProps,
  AvatarNameProps,
  AvatarInfosContainerProps,
  AvatarStatusProps,
  EditAvatarProps,
} from "./types"
import Image from "next/image"
import styles from "./avatar.module.css"

const AvatarContext = createContext<{
  userStatus: "ativo" | "inativo" | "bloqueado" | undefined
  setUserStatus: React.Dispatch<React.SetStateAction<"ativo" | "inativo" | "bloqueado" | undefined>>
}>({
  userStatus: "ativo",
  setUserStatus: () => { },
})

function AvatarRoot({ children, className, edit, ...props }: AvatarProps): JSX.Element {
  const [userStatus, setUserStatus] = useState<"ativo" | "inativo" | "bloqueado" | undefined>("ativo")

  return (
    <AvatarContext.Provider value={{ userStatus, setUserStatus }}>
      <div
        className={`${styles.ds_avatar}${userStatus === "inativo" ? ` ${styles.ds_avatarInativo}` : ""
          }${className ? ` ${className}` : ""}`}
        data-testid="AvatarTest"
        {...props}
      >
        {children}
      </div>
    </AvatarContext.Provider>
  )
}

function AvatarImage({ url, size, alt, border, hover, name, email, role, ...props }: AvatarImageProps): JSX.Element {
  return (
    <div className={styles.ds_avatarImageContainer}>
      <Image
        src={url || "/placeholder.svg"}
        alt={alt}
        className={`${styles.ds_avatarImg}${border ? ` ${styles.ds_avatarImgBorder}` : ""}${hover ? ` ${styles.ds_avatarImgHover}` : ""
          }`}
        width={size}
        height={size}
        {...props}
      />
      {hover && (
        <div className={styles.ds_avatarModal} data-testid="AvatarImageTest">
          {name && <Avatar.Name className={styles.ds_avatarNameBold}>{name}</Avatar.Name>}
          {email && <Avatar.Email className={styles.ds_avatarEmailNormal}>{email}</Avatar.Email>}
          {role && <Avatar.Role className={styles.ds_avatarRoleNormal}>{role}</Avatar.Role>}
        </div>
      )}
    </div>
  )
}

function AvatarStatus({ status = "ativo", size = 20, ...props }: AvatarStatusProps): JSX.Element {
  const { setUserStatus } = useContext(AvatarContext)

  useEffect(() => {
    setUserStatus(status)
  }, [status, setUserStatus])

  const capitalizedStatus = status ? status.charAt(0).toUpperCase() + status.slice(1) : "Ativo"

  return (
    <div
      className={`${styles.ds_avatarStatus} ${styles[`ds_avatarStatus${capitalizedStatus}`]}`}
      style={{ width: size, height: size }}
      {...props}
      data-testid="AvatarStatusTest"
    >
      <span />
    </div>
  )
}

function AvatarInfosContainer({ children, ...props }: AvatarInfosContainerProps): JSX.Element {
  return (
    <div className={styles.ds_avatarWrapper} data-testid="AvatarContainerTest" {...props}>
      {children}
    </div>
  )
}

function AvatarName({ children, ...props }: AvatarNameProps): JSX.Element {
  return (
    <span className={styles.ds_avatarName} data-testid="AvatarNameTest" {...props}>
      {children}
    </span>
  )
}

function AvatarEmail({ children, ...props }: AvatarNameProps): JSX.Element {
  return (
    <span className={styles.ds_avatarEmail} data-testid="AvatarEmailTest" {...props}>
      {children}
    </span>
  )
}

function AvatarRole({ children, ...props }: AvatarNameProps): JSX.Element {
  return (
    <span className={styles.ds_avatarRole} data-testid="AvatarRoleTest" {...props}>
      {children}
    </span>
  )
}

function EditAvatar({ edit, children, onClick, ...props }: EditAvatarProps): JSX.Element {
  return (
    <div className={styles.ds_avatarEdit} data-testid="EditAvatarTest" {...props}>
      {children}
      {edit && (
        <button
          type="button"
          aria-label="Editar avatar"
          className={`material-symbols-outlined ${styles.ds_avatarButton}`}
          onClick={onClick}
        >
          edit
        </button>
      )}
    </div>
  )
}

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Status: AvatarStatus,
  InfosContainer: AvatarInfosContainer,
  Name: AvatarName,
  Email: AvatarEmail,
  Role: AvatarRole,
  Edit: EditAvatar,
}
