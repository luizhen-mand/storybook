import { ReactNode, HTMLAttributes, JSX, ButtonHTMLAttributes, InputHTMLAttributes, ChangeEvent, LabelHTMLAttributes } from 'react';

interface InputUploadRootProps {
    children: ReactNode;
    className?: string;
}
interface InputUploadContainerProps {
    children: ReactNode;
    onFilesSelected: (files: File[]) => void;
}
interface InputUploadButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

declare const InputUploadRoot: ({ children, className, ...props }: InputUploadRootProps) => JSX.Element;
declare const InputUploadContainer: ({ onFilesSelected, children, ...props }: InputUploadContainerProps) => JSX.Element;
declare const InputUploadButton: ({ children, ...props }: InputUploadButtonProps) => JSX.Element;
declare const InputUpload: {
    Root: ({ children, className, ...props }: InputUploadRootProps) => JSX.Element;
    Container: ({ onFilesSelected, children, ...props }: InputUploadContainerProps) => JSX.Element;
    Button: ({ children, ...props }: InputUploadButtonProps) => JSX.Element;
};

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    iconPosition?: 'top' | 'left';
    bgcolor?: 'green' | 'orange' | 'gray' | 'pink' | 'transparent' | 'white' | 'yellow' | 'blue' | 'lightPink' | 'darkGray';
    color?: 'gray' | 'pink' | 'blue' | 'green';
    textColor?: 'light' | 'dark';
    border?: boolean;
    round?: boolean;
    active?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
    type?: "submit" | "reset" | "button" | undefined;
}
interface ButtonIconProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

declare function ButtonRoot({ children, color, bgcolor, type, iconPosition, textColor, active, round, border, className, ...props }: ButtonRootProps): JSX.Element;
declare function ButtonIcon({ children, size, ...props }: ButtonIconProps): JSX.Element;
declare const Button: {
    Root: typeof ButtonRoot;
    Icon: typeof ButtonIcon;
};

interface InputTextRootProps {
    children: ReactNode;
    className?: string;
    required?: boolean;
    inputSize?: 'sm' | 'md' | 'lg';
    childrenPosition?: 'left' | 'right';
    error?: boolean;
}
interface InputTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    required?: boolean;
    children?: ReactNode;
    id?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    childrenPosition?: 'left' | 'right';
    mask?: Array<string | RegExp>;
}
interface InputTextLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
    required?: boolean;
}
interface InputTextAlertProps {
    children: ReactNode;
}
interface InputTextIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: "submit" | "reset" | "button" | undefined;
}

declare function InputTextRoot({ children, inputSize, className, ...props }: InputTextRootProps): JSX.Element;
declare function InputTextInput({ children, error, childrenPosition, mask, ...props }: InputTextInputProps): JSX.Element;
declare function InputTextLabel({ children, required, ...props }: InputTextLabelProps): JSX.Element;
declare function InputTextMessage({ children, ...props }: InputTextAlertProps): JSX.Element;
declare function InputTextIcon({ children, type, ...props }: InputTextIconProps): JSX.Element;
declare const InputText: {
    Root: typeof InputTextRoot;
    Input: typeof InputTextInput;
    Label: typeof InputTextLabel;
    Message: typeof InputTextMessage;
    Icon: typeof InputTextIcon;
};

interface CardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}
interface CardTitleProps {
    children: ReactNode;
}
interface CardDescriptionProps {
    children: ReactNode;
}

declare function CardRoot({ children, className, onClick, ...props }: CardProps): JSX.Element;
declare function CardTitle({ children, ...props }: CardTitleProps): JSX.Element;
declare function CardDescription({ children, ...props }: CardDescriptionProps): JSX.Element;
declare const Card: {
    Root: typeof CardRoot;
    Title: typeof CardTitle;
    Description: typeof CardDescription;
};

interface HeaderProps {
    children: ReactNode;
    isFull: boolean;
    className?: string;
}
interface HeaderBrandProps {
    children: ReactNode;
    url: string;
    ariaLabel?: string;
}
interface HeaderContentProps {
    children: ReactNode;
}
interface HeaderIconsProps {
    children: ReactNode;
}

declare function HeaderRoot({ children, isFull, className, ...props }: HeaderProps): JSX.Element;
declare function HeaderBrand({ children, url, ariaLabel, ...props }: HeaderBrandProps): JSX.Element;
declare function HeaderContent({ children, ...props }: HeaderContentProps): JSX.Element;
declare function HeaderIcons({ children, ...props }: HeaderIconsProps): JSX.Element;
declare const Header: {
    Root: typeof HeaderRoot;
    Content: typeof HeaderContent;
    Brand: typeof HeaderBrand;
    Icons: typeof HeaderIcons;
};

export { Button, Card, Header, InputText, InputUpload, InputUploadButton, InputUploadContainer, InputUploadRoot };
