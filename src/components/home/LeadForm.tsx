import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
}

const LeadForm = ({ isOpen, onClose, productTitle = "" }: LeadFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  const closeForm = () => {
    resetForm();
    onClose();
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Fortell oss om deg
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Navn</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ola Nordmann"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">E-post</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ola@example.com"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+47 123 45 678"
                  className="mt-1"
                />
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Fortell oss om din bedrift
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="company">Bedriftsnavn</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Din Bedrift AS"
                  className="mt-1"
                />
              </div>
              <div className="space-y-2">
                <Label>Budsjett</Label>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => handleRadioChange("budget", value)}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="under-10k" id="under-10k" />
                    <Label htmlFor="under-10k">Under 10.000 kr</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10k-30k" id="10k-30k" />
                    <Label htmlFor="10k-30k">10.000 - 30.000 kr</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="30k-50k" id="30k-50k" />
                    <Label htmlFor="30k-50k">30.000 - 50.000 kr</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="over-50k" id="over-50k" />
                    <Label htmlFor="over-50k">Over 50.000 kr</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Fortell oss om ditt prosjekt
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Tidsramme</Label>
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleRadioChange("timeline", value)
                  }
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asap" id="asap" />
                    <Label htmlFor="asap">Så snart som mulig</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-month" id="1-month" />
                    <Label htmlFor="1-month">Innen 1 måned</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-months" id="3-months" />
                    <Label htmlFor="3-months">Innen 3 måneder</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible">Fleksibel</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="message">
                  Fortell oss mer om ditt prosjekt
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Beskriv dine behov og mål..."
                  className="mt-1 min-h-[120px]"
                />
              </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Bekreft din forespørsel
            </h3>
            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-2">
                <p className="text-sm font-medium text-gray-500">Produkt:</p>
                <p className="text-sm text-gray-800">
                  {productTitle || "Ikke spesifisert"}
                </p>

                <p className="text-sm font-medium text-gray-500">Navn:</p>
                <p className="text-sm text-gray-800">{formData.name}</p>

                <p className="text-sm font-medium text-gray-500">E-post:</p>
                <p className="text-sm text-gray-800">{formData.email}</p>

                <p className="text-sm font-medium text-gray-500">Telefon:</p>
                <p className="text-sm text-gray-800">
                  {formData.phone || "Ikke oppgitt"}
                </p>

                <p className="text-sm font-medium text-gray-500">Bedrift:</p>
                <p className="text-sm text-gray-800">
                  {formData.company || "Ikke oppgitt"}
                </p>

                <p className="text-sm font-medium text-gray-500">Budsjett:</p>
                <p className="text-sm text-gray-800">
                  {formData.budget === "under-10k" && "Under 10.000 kr"}
                  {formData.budget === "10k-30k" && "10.000 - 30.000 kr"}
                  {formData.budget === "30k-50k" && "30.000 - 50.000 kr"}
                  {formData.budget === "over-50k" && "Over 50.000 kr"}
                  {!formData.budget && "Ikke oppgitt"}
                </p>

                <p className="text-sm font-medium text-gray-500">Tidsramme:</p>
                <p className="text-sm text-gray-800">
                  {formData.timeline === "asap" && "Så snart som mulig"}
                  {formData.timeline === "1-month" && "Innen 1 måned"}
                  {formData.timeline === "3-months" && "Innen 3 måneder"}
                  {formData.timeline === "flexible" && "Fleksibel"}
                  {!formData.timeline && "Ikke oppgitt"}
                </p>
              </div>

              {formData.message && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Melding:</p>
                  <p className="text-sm text-gray-800 mt-1">
                    {formData.message}
                  </p>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500">
              Ved å sende inn dette skjemaet samtykker du til at vi kan kontakte
              deg angående din forespørsel.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {productTitle ? `Bestill ${productTitle}` : "Bestill nå"}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeForm}
                className="rounded-full h-8 w-8 p-0"
              >
                <X size={18} />
              </Button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="text-green-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Takk for din henvendelse!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Vi har mottatt din forespørsel og vil kontakte deg innen 24
                    timer.
                  </p>
                  <Button
                    onClick={closeForm}
                    className="bg-black hover:bg-gray-800"
                  >
                    Lukk
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium text-gray-500">
                        Steg {step} av 4
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        {Math.round((step / 4) * 100)}%
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-black h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(step / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

                  <div className="flex justify-between mt-8">
                    {step > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="flex items-center"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Tilbake
                      </Button>
                    ) : (
                      <div></div>
                    )}

                    {step < 4 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-black hover:bg-gray-800 ml-auto"
                      >
                        Neste <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-black hover:bg-gray-800 ml-auto"
                      >
                        Send forespørsel
                      </Button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadForm;
