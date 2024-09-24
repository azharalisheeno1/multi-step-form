import StepperForm from '@/components/StepperForm';

export default function FormPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Multi-Step Form</h1>
        <StepperForm />
      </div>
    </div>
  );
}
