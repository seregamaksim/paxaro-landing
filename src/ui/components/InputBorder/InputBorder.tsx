import { colors } from '@/constants';
import { useField } from 'formik';
import { FC, useState } from 'react';
import styled from 'styled-components';

interface InputBorderProps {
  className?: string;
  name: string;
  label: string;
  id: string;
}

const InputBorder: FC<JSX.IntrinsicElements['input'] & InputBorderProps> = ({
  className,
  name,
  label,
  id,
  ...props
}) => {
  const [field, meta] = useField(name);
  const [focusInput, setFocusInput] = useState(field.value > 0 ? true : false);

  function onBlur() {
    if (field.value.length > 0) {
      return false;
    }
    setFocusInput(false);
  }
  function onFocus() {
    setFocusInput(true);
  }
  return (
    <Root className={className}>
      <Label focus={focusInput} htmlFor={id}>
        {label}
      </Label>
      <Input
        onBlur={onBlur}
        onFocus={onFocus}
        id={id}
        error={meta.error}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        {...props}
      />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label<{ focus: boolean }>`
  position: absolute;
  left: 13px;
  top: -13px;
  transform: ${(props) => (props.focus ? 'translateY(0)' : 'translateY(21px)')};
  transition: all 0.3s ease;
  font-size: ${(props) => (props.focus ? '14px' : '18px')};
  line-height: ${(props) => (props.focus ? '20px' : '25px')};
  letter-spacing: 0.01em;
  pointer-events: none;
  color: ${(props) => (props.focus ? colors.green : '#797979')};
`;
const Input = styled.input<any>`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;

  color: ${colors.black2};
  padding: 8px 13px;
  border-bottom: 2px solid
    ${(props) => (props.error ? colors.red : colors.green)};
  transition: all 0.3s ease;
  outline: none;
  width: 100%;
`;

export default InputBorder;
