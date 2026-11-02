"use client";

import { Download } from "lucide-react";

export default function CvPrintButton() {
  return (
    <button className="button button-primary" onClick={() => window.print()}>
      <Download size={16} /> Imprimer / enregistrer en PDF
    </button>
  );
}
