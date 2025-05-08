import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  onConfirm: () => void;
}

export default function ContactModal({ isOpen, onClose, productName, onConfirm }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Product Inquiry</DialogTitle>
        </DialogHeader>
        <div className="mb-4 text-text-light">
          You are being redirected to our messaging system with a pre-filled inquiry about:
        </div>
        <div className="bg-secondary p-4 rounded-lg mb-4">
          <p className="font-medium text-text">
            Hi, I'm interested in <span className="text-primary">{productName}</span>.
          </p>
        </div>
        <DialogFooter className="sm:justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" onClick={onConfirm}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
