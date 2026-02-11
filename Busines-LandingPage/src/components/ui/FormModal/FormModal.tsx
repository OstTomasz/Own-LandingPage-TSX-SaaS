import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

import styles from "./FormModal.module.scss";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";

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
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
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
    const sendData = async () => {
      console.log("Form Data:", data);
      await new Promise((res) => setTimeout(res, 1500));
      reset();
      onClose();
    };

    await toast.promise(sendData(), {
      loading: "Sending your message...",
      success: "Form sent successfully! 🚀",
      error: "Something went wrong.",
    });
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.modalRoot} onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter={styles.transition}
          enterFrom={styles.opacity0}
          enterTo={styles.opacity100}
          leave={styles.transition}
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

              <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <p className={styles.description}>
                  Leave your contacts and we will call you back
                </p>

                {[
                  { id: "name", label: "Name*", icon: "person", type: "text" },
                  { id: "phone", label: "Phone*", icon: "phone", type: "tel" },
                  {
                    id: "email",
                    label: "Email*",
                    icon: "email",
                    type: "email",
                  },
                ].map((input) => (
                  <div key={input.id} className={styles.field}>
                    <label htmlFor={input.id}>{input.label}</label>
                    <div className={styles.inputWrapper}>
                      <input
                        {...register(input.id as keyof ContactFormData)}
                        id={input.id}
                        type={input.type}
                      />
                      <div className={styles.icon}>
                        <Icon name={input.icon} size={18} />
                      </div>
                      {errors[input.id as keyof ContactFormData] && (
                        <p className={styles.error}>
                          {errors[input.id as keyof ContactFormData]?.message}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <div className={styles.field}>
                  <label htmlFor="comment">Comment</label>
                  <textarea
                    {...register("comment")}
                    id="comment"
                    placeholder="Text input"
                  />
                </div>

                <div className={styles.checkboxField}>
                  <input type="checkbox" {...register("policy")} id="policy" />
                  <label htmlFor="policy">
                    I accept the terms and conditions of the{" "}
                    <a href="#">Privacy Policy</a>*
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
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};
