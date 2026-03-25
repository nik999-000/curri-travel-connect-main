import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CalendarDays, Users, Clock, User, Phone, CheckCircle } from 'lucide-react';

const tourOptions = [
  { value: '1-person', label: '1 Person — 25€', price: '25€' },
  { value: '1-3-person', label: '1–3 People — 50€', price: '50€' },
  { value: 'private', label: 'Private — 150€', price: '150€' },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '15:00', '16:00',
];

export default function BookingSection() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '09:00',
    tour: '1-person',
    guests: '1',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    const trimmedName = form.name.trim();
    if (!trimmedName || trimmedName.length < 2) errs.name = 'Please enter your name (min 2 characters)';
    if (trimmedName.length > 100) errs.name = 'Name is too long';
    const phoneClean = form.phone.replace(/\s/g, '');
    if (!phoneClean || phoneClean.length < 8 || !/^[+\d]+$/.test(phoneClean)) errs.phone = 'Please enter a valid phone number';
    if (!form.date) errs.date = 'Please select a date';
    else {
      const selected = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) errs.date = 'Date must be in the future';
    }
    if (form.notes.length > 500) errs.notes = 'Notes are too long (max 500)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const selectedTour = tourOptions.find((t) => t.value === form.tour);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const coupon = `CT-${Date.now().toString(36).toUpperCase()}`;
    const trimmedName = form.name.trim().slice(0, 100);
    const trimmedNotes = form.notes.trim().slice(0, 500);

    const lines = [
      `🎫 *BOOKING COUPON — CURRI TRAVEL*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `📋 Code: *${coupon}*`,
      ``,
      `👤 Name: ${trimmedName}`,
      `📞 Phone: ${form.phone.replace(/\s/g, '')}`,
      `📅 Date: ${form.date}`,
      `🕐 Time: ${form.time}`,
      `🚤 Tour: ${selectedTour?.label}`,
      `👥 Guests: ${form.guests}`,
      trimmedNotes ? `📝 Notes: ${trimmedNotes}` : '',
      ``,
      `━━━━━━━━━━━━━━━━━━━━`,
      `✅ Your booking is confirmed!`,
      `We look forward to seeing you 🌊`,
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/355684379620?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card rounded-3xl p-12 max-w-lg mx-auto animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-primary" size={32} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Booking Sent!</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Your coupon has been opened in WhatsApp. Send the message to confirm it.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', date: '', time: '09:00', tour: '1-person', guests: '1', notes: '' }); }}
              className="text-primary text-sm font-medium hover:underline"
            >
              Make another booking →
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 parallax-bg opacity-8"
        style={{ backgroundImage: `url(https://www.curritravel.al/foto/KOMANI-LAKE-TOUR-WITH-BOAT.jpg)` }}
      />
      <div className="absolute inset-0 bg-background/95" />

      <div ref={ref} className="relative z-10 container mx-auto px-6 scroll-reveal">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-3">Book Online</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ textWrap: 'balance' } as React.CSSProperties}>
            Get Your <span className="text-gradient">Coupon</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Fill out the form and your booking coupon will be sent automatically via WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
                <User size={15} className="text-primary" /> Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                maxLength={100}
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
                <Phone size={15} className="text-primary" /> Phone Number
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                maxLength={20}
                placeholder="+355 6X XXX XXXX"
                className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
                <CalendarDays size={15} className="text-primary" /> Date
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow [color-scheme:dark]"
              />
              {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
                <Clock size={15} className="text-primary" /> Time
              </label>
              <select
                value={form.time}
                onChange={(e) => update('time', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow appearance-none"
              >
                {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
                🚤 Tour Type
              </label>
              <select
                value={form.tour}
                onChange={(e) => update('tour', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow appearance-none"
              >
                {tourOptions.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
                <Users size={15} className="text-primary" /> Number of Guests
              </label>
              <select
                value={form.guests}
                onChange={(e) => update('guests', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow appearance-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={String(n)}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
              📝 Notes (optional)
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              maxLength={500}
              rows={3}
              placeholder="E.g. we have small children, we'd like a picnic..."
              className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
            />
            {errors.notes && <p className="text-destructive text-xs mt-1">{errors.notes}</p>}
          </div>

          <button
            type="submit"
            className="mt-8 w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/20"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Send Coupon via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
