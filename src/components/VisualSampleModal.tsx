import React from 'react';
import { X } from 'lucide-react';
import { VisualSheetSample } from '../types';

interface VisualSampleModalProps {
  sample: VisualSheetSample | null;
  onClose: () => void;
  onSelectPlan: (plan: 'basic' | 'complete') => void;
}

export const VisualSampleModal: React.FC<VisualSampleModalProps> = ({ sample, onClose }) => {
  if (!sample) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:-right-12 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image in natural proportion */}
        {sample.imageUrl && (
          <img 
            src={sample.imageUrl} 
            alt={sample.title} 
            className="max-h-[85vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl" 
          />
        )}
      </div>
    </div>
  );
};

