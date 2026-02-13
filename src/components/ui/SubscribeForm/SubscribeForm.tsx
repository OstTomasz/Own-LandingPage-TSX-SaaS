import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import styles from "./SubscribeForm.module.scss";

const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormData) => {
    const subscribeAction = async () => {
      console.log("Newsletter Data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      reset();
    };

    await toast.promise(subscribeAction(), {
      loading: "Subscribing...",
      success: "Welcome to the newsletter! 🚀",
      error: "Something went wrong.",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <label className={styles.label}>
        <span className={styles.labelText}>Get business insights</span>
        <input
          {...register("email")}
          type="email"
          placeholder="E-mail"
          className={styles.input}
        />
      </label>
      <Button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Subscribe"}
        <Icon name="telegram" size={20} className={styles.icon} />
      </Button>
    </form>
  );
};
