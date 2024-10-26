import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export type FormData = {
  propertyType: string;
  damageType: string[];
  damageDate: string;
  propertyAddress: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
};

const AssessmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    damageType: [],
    damageDate: '',
    propertyAddress: '',
    city: '',
    state: '',
    zipCode: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      damageType: prev.damageType.includes(value)
        ? prev.damageType.filter((type) => type !== value)
        : [...prev.damageType, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 8));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i + 1 <= step ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1 <= step ? <CheckCircle className="w-5 h-5" /> : i + 1}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(step / 8) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Property Type</h3>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select property type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Type of Damage</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Roof', 'Siding', 'Windows', 'Structural', 'Water', 'Wind'].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.damageType.includes(type)}
                    onChange={() => handleCheckboxChange(type)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">When did the damage occur?</h3>
            <input
              type="date"
              name="damageDate"
              value={formData.damageDate}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Property Address</h3>
            <input
              type="text"
              name="propertyAddress"
              value={formData.propertyAddress}
              onChange={handleInputChange}
              placeholder="Street Address"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">City</h3>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}

        {step === 6 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">State</h3>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}

        {step === 7 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">ZIP Code</h3>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="ZIP Code"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}

        {step === 8 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Damage Description</h3>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Please describe the damage in detail..."
              className="w-full p-3 border border-gray-300 rounded-md h-32"
              required
            />
          </div>
        )}

        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Previous
            </button>
          )}
          {step < 8 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit Assessment
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AssessmentForm;