import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LoginForm({ className, ...props }: React.ComponentProps<'form'>) {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Masuk ke Akun Anda</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Masukkan email Anda untuk masuk ke akun
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="contoh@email.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Kata Sandi</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Lupa kata sandi?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Masuk
        </Button>
      </div>
      <div className="text-center text-sm">
        Belum punya akun?{' '}
        <a href="#" className="underline underline-offset-4">
          Daftar
        </a>
      </div>
    </form>
  );
}
