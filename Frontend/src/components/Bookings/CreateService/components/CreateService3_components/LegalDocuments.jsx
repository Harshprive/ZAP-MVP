import React from 'react';
import { ExternalLink } from 'lucide-react';

const LegalDocuments = ({ documents }) => (
  <section className="space-y-3 mt-[40px]">
    <h3 className="font-medium text-purple-900 font-semibold">Legal Documents</h3>
    <div className="space-y-2">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center justify-between p-3 bg-purple-50 rounded-lg"
        >
          <span className="text-sm text-purple-600">{doc.name}</span>
          <ExternalLink className="w-4 h-4 text-purple-600" />
        </div>
      ))}
    </div>
  </section>
);

export default LegalDocuments;
