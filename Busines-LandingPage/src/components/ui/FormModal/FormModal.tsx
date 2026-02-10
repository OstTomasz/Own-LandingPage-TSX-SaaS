import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import styles from "./FormModal.module.scss";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button"; // Import Twojego komponentu

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9+ ]+$/, "Invalid phone number"),
  email: z.email({ message: "Invalid email address" }),
  comment: z.string().optional(),
  policy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FormModal = ({ isOpen, onClose }: Props) => {
  const {
    register,
    handleSubmit, // Pobieramy handleSubmit
    formState: { errors, isSubmitting },
    reset, // Warto dodać, żeby wyczyścić formularz po zamknięciu
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
      policy: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form Data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Form sent successfully!");
      reset(); // Czyścimy pola po sukcesie
      onClose(); // Zamykamy modal
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.modalRoot} onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter={styles.easeOut}
          enterFrom={styles.opacity0}
          enterTo={styles.opacity100}
          leave={styles.easeIn}
          leaveFrom={styles.opacity100}
          leaveTo={styles.opacity0}
        >
          <div className={styles.backdrop} aria-hidden="true" />
        </TransitionChild>

        <div className={styles.wrapper}>
          <TransitionChild
            as={Fragment}
            enter={styles.easeOut}
            enterFrom={styles.scale95}
            enterTo={styles.scale100}
            leave={styles.easeIn}
            leaveFrom={styles.scale100}
            leaveTo={styles.scale95}
          >
            <DialogPanel className={styles.modalContent}>
              <button
                className={styles.closeBtn}
                onClick={onClose}
                type="button"
                aria-label="Close"
              >
                <Icon name="close-btn" size={15} />
              </button>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.description}>
                  Leave your contacts and we will call you back
                </p>

                <div className={styles.field}>
                  <label htmlFor="name">Name*</label>
                  <div className={styles.inputWrapper}>
                    <input {...register("name")} id="name" required />
                    <div className={styles.icon}>
                      <Icon name="person" size={18} />
                    </div>
                  </div>
                  {errors.name && (
                    <p className={styles.error}>{errors.name.message}</p>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Phone*</label>
                  <div className={styles.inputWrapper}>
                    <input {...register("phone")} id="phone" required />
                    <div className={styles.icon}>
                      <Icon name="phone" size={18} />
                    </div>
                  </div>
                  {errors.phone && (
                    <p className={styles.error}>{errors.phone.message}</p>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email*</label>
                  <div className={styles.inputWrapper}>
                    <input {...register("email")} id="email" required />
                    <div className={styles.icon}>
                      <Icon name="email" size={18} />
                    </div>
                  </div>
                  {errors.email && (
                    <p className={styles.error}>{errors.email.message}</p>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="comment">Comment</label>
                  <textarea
                    {...register("comment")}
                    id="comment"
                    placeholder="Text input"
                  />
                </div>

                <div className={styles.checkboxField}>
                  <input
                    type="checkbox"
                    {...register("policy")}
                    id="policy"
                    required
                  />
                  <label htmlFor="policy">
                    I accept the terms and conditions of the{" "}
                    <a href="#">Privacy Policy</a>*
                  </label>
                  {errors.policy && (
                    <p className={styles.error}>{errors.policy.message}</p>
                  )}
                </div>

                {/* ZAMIANA NA TWÓJ KOMPONENT BUTTON */}
                <Button type="submit" className={styles.submitBtn}>
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};
