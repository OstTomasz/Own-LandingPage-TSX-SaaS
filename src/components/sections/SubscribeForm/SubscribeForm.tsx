import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

import styles from "./SubscribeForm.module.scss";
import clsx from "clsx";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";

const subscribeSchema = z.object({
  email: z.email("Invalid email address"),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
    mode: "onTouched",
  });

  const onValid = async (data: SubscribeFormData): Promise<void> => {
    const action = async () => {
      console.log("Data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      reset();
    };

    await toast.promise(action(), {
      loading: "Subscribing...",
      success: "Welcome aboard! 🚀",
      error: "Subscription failed.",
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        void handleSubmit(onValid)(e);
      }}
      noValidate
    >
      <label className={styles.label}>
        <span className={styles.labelText}>Get business insights</span>
        <div className={styles.inputWrapper}>
          <input
            {...register("email")}
            type="email"
            placeholder="E-mail"
            className={clsx(styles.input, errors.email && styles.inputError)}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
      </label>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Subscribe"}
        <Icon name="telegram" size={24} />
      </Button>
    </form>
  );
};
