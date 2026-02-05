import { Container } from "@/components/common/Container";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-emerald-400">Vetra</h3>
            <p className="mt-2 text-sm text-slate-400">
              Document management powered by Powerhouse.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-100">Resources</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-100">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-100">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-100">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© {currentYear} Vetra. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
