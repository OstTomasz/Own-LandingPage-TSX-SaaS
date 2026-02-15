import { useForm, UseFormRegisterReturn, FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactFormSchema, ContactFormData } from "./validation";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";
import styles from "./OrderForm.module.scss";

interface FormFieldProps {
  label: string;
  icon?: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
  type?: string;
}

const FormField = ({
  label,
  icon,
  error,
  registration,
  type = "text",
}: FormFieldProps) => (
  <div className={styles.field}>
    <label htmlFor={registration.name}>{label}</label>
    <div className={styles.inputWrapper}>
      <input
        {...registration}
        id={registration.name}
        type={type}
        className={error ? styles.inputError : ""}
      />
      {icon && (
        <div className={styles.icon}>
          <Icon name={icon} size={18} />
        </div>
      )}
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  </div>
);

export const OrderForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    const sendData = async () => {
      console.log("Data:", data);
      await new Promise((res) => setTimeout(res, 1500));
      reset();
      onSuccess();
    };

    await toast.promise(sendData(), {
      loading: "Sending...",
      success: "Message sent!",
      error: "Error occurred.",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <p className={styles.description}>
        Leave your contacts and we will call you back
      </p>

      <FormField
        label="Name*"
        icon="person"
        registration={register("name")}
        error={errors.name}
      />
      <FormField
        label="Phone*"
        icon="phone"
        type="tel"
        registration={register("phone")}
        error={errors.phone}
      />
      <FormField
        label="Email*"
        icon="email"
        type="email"
        registration={register("email")}
        error={errors.email}
      />

      <div className={styles.field}>
        <label htmlFor="comment">Comment</label>
        <textarea
          {...register("comment")}
          id="comment"
          placeholder="Text input"
          className={styles.textarea}
        />
      </div>

      <div className={styles.checkboxField}>
        <input
          type="checkbox"
          {...register("policy")}
          id="policy"
          className={styles.hiddenCheckbox}
        />
        <label htmlFor="policy" className={styles.checkboxLabel}>
          <span className={styles.customCheckbox}>
            <Icon
              name="checkbox"
              size={24}
              className={styles.checkmarkUnchecked}
            />
            <Icon name="check" size={16} className={styles.checkmarkChecked} />
          </span>
          <span className={styles.policyInfo}>
            I accept the terms and conditions of the{" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Privacy Policy
            </a>
            *
          </span>
        </label>
        {errors.policy && (
          <p className={styles.error}>{errors.policy.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};
