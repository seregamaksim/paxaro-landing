import { FC, useState } from 'react';
import { Formik, Form } from 'formik';
import { InputBorder } from '@/ui/components/InputBorder';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Trans } from 'react-i18next';
import Link from 'next/link';
import { Button } from '@/ui/components/Button';
import { baseUrl, colors } from '@/constants';
import axios, { AxiosResponse } from 'axios';

interface FormValues {
  email: string;
  name: string;
  surname: string;
  phone: string;
}

interface LeadFormProps {
  className?: string;
}

const LeadFormSchema = Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string(),
  phone: Yup.string(),
  email: Yup.string().email().required(),
});

const LinkText = ({ href, children, ...props }: any) => {
  return (
    <Link href={href || ''}>
      <a>{children}</a>
    </Link>
  );
};

const LeadForm: FC<LeadFormProps> = ({ className }) => {
  const { t } = useTranslation('leadForm');
  const [isSuccess, setIsSuccess] = useState(false);

  function submitForm(values: FormValues) {
    axios({
      method: 'post',
      url: `${baseUrl}/contact_me`,
      data: values,
    }).then(({ status }: AxiosResponse) => {
      if (status === 200) setIsSuccess(true);
    });
  }

  return isSuccess ? (
    <SuccessBlock>
      <SuccessBlockText>
        <Trans t={t} i18nKey="successText">
          Форма <span>успешно</span> отправлена, в ближайшее время с вами
          свяжутся!
        </Trans>
      </SuccessBlockText>
    </SuccessBlock>
  ) : (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        phone: '',
      }}
      onSubmit={submitForm}
      validationSchema={LeadFormSchema}
    >
      <StyledForm className={className}>
        <NameFormBlock>
          <InputBorder
            id="leadform-name"
            name="name"
            type="text"
            label={t('inputNameLabel')}
          />
        </NameFormBlock>

        <FormBlock>
          <InputBorder
            id="leadform-email"
            name="email"
            type="email"
            label={t('inputEmailLabel')}
          />
        </FormBlock>
        <SurnameFormBlock>
          <InputBorder
            id="leadform-surname"
            name="surname"
            type="text"
            label={t('inputSurnameLabel')}
          />
        </SurnameFormBlock>
        <FormBlock>
          <InputBorder
            id="leadform-phone"
            name="phone"
            type="tel"
            label={t('inputPhoneLabel')}
          />
        </FormBlock>
        <FormBlock>
          <FormPrivacyText>
            <Trans t={t} i18nKey="privacyText">
              Нажимая на кнопку, вы даете согласие на{' '}
              <LinkText href="/term-of-use">
                обработку персональных данных
              </LinkText>{' '}
              и соглашаетесь с{' '}
              <LinkText href="/privacy">политикой конфиденциальности</LinkText>
            </Trans>
          </FormPrivacyText>
        </FormBlock>
        <FormBlock>
          <SubmitButton type="submit" text={t('formButton')} />
        </FormBlock>
      </StyledForm>
    </Formik>
  );
};

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 10%;
  @media (max-width: 1024px) {
    column-gap: 5%;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-bottom: 35px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const NameFormBlock = styled(FormBlock)`
  @media (max-width: 768px) {
    order: -2;
  }
`;
const SurnameFormBlock = styled(FormBlock)`
  @media (max-width: 768px) {
    order: -1;
  }
`;

const FormPrivacyText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;

  color: #797979;
  & a {
    text-decoration: underline;
  }
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

const SuccessBlock = styled.div`
  padding: 67px 90px;
  background: #f4f4f4;
  border-radius: 45px;
  max-width: 612px;

  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 30px;
    max-width: 500px;
    border-radius: 30px;
  }
`;

const SuccessBlockText = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.01em;

  color: ${colors.black1};
  span {
    display: inline-block;
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 105%;
      left: -3px;
      height: 100%;
      background-color: ${colors.green};
    }
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export default LeadForm;
