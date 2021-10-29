import { useField } from 'formik';
import { FC, useEffect } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

interface ISelectUIProps {
  className?: string;
  id: string;
  options: Option[];
}

interface Option {
  value: string;
  label: string;
}

const SelectUI: FC<ISelectUIProps & any> = ({
  className,
  options,
  id,
  ...props
}) => {
  const [field, state, { setValue }] = useField(props);

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: '#999999',
      borderRadius: 14,
      backgroundColor: 'transparent',
      minHeight: 47,
      paddingRight: 10,
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      paddingLeft: 14,
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      fontSize: 18,
      lineHeight: '25px',
      letterSpacing: '0.01em',
      fontWeight: 600,
      color: 'var(--white)',
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      background: 'var(--black2)',
      border: '1px solid #A3A3A3',
      borderRadius: 14,
      overflow: 'hidden',
      marginTop: 4,
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,
      padding: 0,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: 18,
      lineHeight: '25px',
      letterSpacing: '0.01em',
      fontWeight: 600,
      color: state.isSelected ? 'var(--green)' : 'var(--white)',
      backgroundColor:
        state.isFocused && !state.isSelected ? 'var(--green)' : 'transparent',
      padding: '8px 13px',
      ':active': {
        backgroundColor:
          state.isFocused && !state.isSelected ? 'var(--green)' : 'transparent',
      },
    }),
  };
  const onChange = ({ value }: any) => {
    setValue(value);
  };
  return (
    <Root className={className}>
      {/* <select {...field}>
        {options.map((option: Option, index: number) => (
          <option key={index} value={option.value} label={option.label} />
        ))}
      </select> */}
      <Select
        inputId={id}
        styles={customStyles}
        components={{
          IndicatorSeparator: null,
        }}
        options={options}
        defaultValue={options.find(
          (option: Option) => option.value === field.value
        )}
        onChange={onChange}
      />
    </Root>
  );
};

const Root = styled.div``;

export default SelectUI;
