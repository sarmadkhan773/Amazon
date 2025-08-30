import React from 'react';

function FooterBottom() {
  return (
    <footer className="bg-[#131A22] text-white py-6 text-sm">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <div className="flex justify-center items-center space-x-6 text-gray-300">
          <span className="flex items-center space-x-1">
            <span>🌐</span>
            <span>English</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>$</span>
            <span>USD-U.S.Dollar</span>
          </span>
          <span className="flex items-center space-x-1">
          <span>🇺🇸</span>
            <span>United States</span>
          </span>
        </div>

        <p className="text-white font-medium">
          Already a customer? <span className="underline cursor-pointer">Sign in</span>
        </p>

        <div className="flex justify-center flex-wrap gap-4 text-gray-400 text-xs">
          <span className="hover:underline cursor-pointer">Conditions of Use</span>
          <span className="hover:underline cursor-pointer">Privacy Notice</span><span className="hover:underline cursor-pointer">Consumer Health Data Privacy Disclosure</span>
          <span className="hover:underline cursor-pointer flex items-center">
            Your Ads Privacy Choices
            <span className="ml-1">✅<span className="ml-1"></span>❌
            </span>
          </span>
        </div>

        <p className="text-gray-500 text-xs mt-2">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}

export default FooterBottom;
