import { COLORS } from '@/constants';
import { useField } from 'formik';
import { FC } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

interface SelectUIProps {
  className?: string;
  id: string;
  options: Option[];
}

interface Option {
  value: string;
  label: string;
}

const SelectUI: FC<SelectUIProps & any> = ({
  className,
  options,
  id,
  ...props
}) => {
  const [field, state, { setValue }] = useField(props);

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: COLORS.darkGray,
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
      color: COLORS.white,
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      background: COLORS.black2,
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
      color: state.isSelected ? COLORS.green : COLORS.white,
      backgroundColor:
        state.isFocused && !state.isSelected ? COLORS.green : 'transparent',
      padding: '8px 13px',
      ':active': {
        backgroundColor:
          state.isFocused && !state.isSelected ? COLORS.green : 'transparent',
      },
    }),
  };

  const onChange = ({ value }: any) => {
    setValue(value);
  };

  return (
    <Root className={className}>
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
        isSearchable={false}
        onChange={onChange}
      />
    </Root>
  );
};

const Root = styled.div``;

export default SelectUI;
