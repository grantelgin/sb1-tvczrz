import React from 'react';
import AssessmentForm from '../components/AssessmentForm';

const Assessment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Storm Damage Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete this quick assessment to receive your free damage report and connect with trusted local contractors.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <AssessmentForm />
        </div>
      </div>
    </div>
  );
};

export default Assessment;