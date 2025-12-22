import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, Search, Globe, ArrowRight,
  Cloud, Code, Shield, Database, Zap,
  BarChart, Cpu, Server, Layers, Smartphone,
  Activity, ShoppingCart, Factory, Lightbulb, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Types ---

interface SubItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavItem {
  id: string;
  label: string;
  href?: string;
  type: 'link' | 'dropdown' | 'mega';
  children?: SubItem[] | { title: string; items: SubItem[] }[];
}

// --- NAV ITEMS ---

// partial: set internal route paths
const NAV_ITEMS: NavItem[] = [
  {
    id: 'services',
    label: 'Services',
    type: 'dropdown',
    children: [
      { label: 'Data Engineering & Integration', href: '/service/dataengineering', description: '...', icon: <Layers size={16} /> },
      { label: 'Business Intelligence & Visualization', href: '/service/businessIntelligence', description: '...', icon: <Users size={16} /> },
      { label: 'AI & Machine Learning', href: 'service/aimachine', description: '...', icon: <Factory size={16} /> },
      { label: 'Data Governance', href: '/service/governance', description: '...', icon: <Users size={16} /> },
      { label: 'Managed Services', href: '/service/managedservice', description: '...', icon: <Users size={16} /> },
      { label: 'Digital Transformation', href: '/service/digitaltransformation', description: '...', icon: <Users size={16} /> },
    ] as SubItem[]
  },
//   {
//     id: 'industries',
//     label: 'Industries',
//     type: 'dropdown',
//         children: [
//         { label: 'Banking & Financial', href: '/industries/bsfi', description: 'Fintech innovation and security.', icon: <BarChart size={16} /> },
//         { label: 'Healthcare', href: '/industries/healthcare', description: 'Patient-centric digital care.', icon: <Activity size={16} /> },
//         { label: 'Retail & CPG', href: '/industries/retail', description: 'Omnichannel commerce.', icon: <ShoppingCart size={16} /> },
//         { label: 'Manufacturing', href: '/industries/manufacturing', description: 'Industry 4.0 solutions.', icon: <Factory size={16} /> },
//         { label: 'Energy', href: '/industries/energy', description: 'Sustainable energy mgmt.', icon: <Lightbulb size={16} /> },
//         ] as SubItem[]
//   },
  { id: 'indsutrys', label: 'Industry', type: 'link', href: '/industry' },
  { id: 'solutions', label: 'Solutions', type: 'link', href: '/solutions' },
  { id: 'partnerships', label: 'Partnerships', type: 'link', href: '/partners' },
  { id: 'insights', label: 'Insights', type: 'link', href: '/insights' },
  { id: 'about', label: 'About Us', type: 'link', href: '/aboutus' },
  { id: 'career', label: 'Career', type: 'link', href: '/career' },
];

// --- Single Header Component (includes Mobile Drawer internally) ---

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string[]>([]); // for mobile

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = (id: string) => {
    setExpanded(curr => curr.includes(id) ? curr.filter(i => i !== id) : [...curr, id]);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b shadow-sm
          ${isScrolled
            ? 'bg-white backdrop-blur-md shadow-sm py-3 border-gray-200'
            : 'bg-white backdrop-blur-sm py-4 border-transparent'
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-full">
          <div className="flex items-center justify-between h-full">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50">
              {/* <div className="w-8 h-8 bg-[#02A5E6] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
                N
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">
                Nexus<span className="text-[#02A5E6]">Corp</span>
              </span> */}
 <Link to="/">
  <img
    src="https://www.fipsar.com/assets/img/Fipsar-logo.jpg"
    width="110"
    alt="Fipsar Logo"
    style={{ cursor: 'pointer' }}
  />
</Link>
            </div>

            {/* Desktop Nav */}
    {/* Desktop Nav */}
<nav className="hidden lg:flex items-center gap-1 h-full" role="navigation" aria-label="Primary">
  {NAV_ITEMS.map((item) => (
    <div
      key={item.id}
      className="relative group h-full flex items-center"
      onMouseEnter={() => setActiveDropdown(item.id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* Top-level label (internal route => Link, external => a) */}
      {item.href && /^https?:\/\//.test(item.href) ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium transition-all duration-200 rounded-full
            ${activeDropdown === item.id ? 'text-[#02A5E6] bg-indigo-50/80' : 'text-slate-600 hover:text-[#02A5E6] hover:bg-slate-50'}`}
        >
          {item.label}
          {(item.type === 'dropdown' || item.type === 'mega') && (
            <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
          )}
        </a>
      ) : (
        <Link
          to={item.href || '#'}
          className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium transition-all duration-200 rounded-full
            ${activeDropdown === item.id ? 'text-[#02A5E6] bg-indigo-50/80' : 'text-slate-600 hover:text-[#02A5E6] hover:bg-slate-50'}`}
          aria-haspopup={item.type === 'dropdown' || item.type === 'mega' ? 'true' : undefined}
          aria-expanded={activeDropdown === item.id}
        >
          {item.label}
          {(item.type === 'dropdown' || item.type === 'mega') && (
            <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
          )}
        </Link>
      )}

      {/* MEGA Dropdown */}
      {item.type === 'mega' && (
        <div
          className={`fixed left-0 right-0 top-[calc(100%-1px)] w-full bg-white border-y border-gray-100 shadow-xl shadow-slate-200/40
            transform transition-all duration-300 origin-top z-40
            ${activeDropdown === item.id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
          style={{ top: isScrolled ? '60px' : '76px' }}
          role="region"
          aria-hidden={activeDropdown === item.id ? 'false' : 'true'}
        >
          <div className="max-w-[1440px] mx-auto px-8 py-10">
            <div className="grid grid-cols-5 gap-8">
              {(item.children as { title: string; items: SubItem[] }[]).map((group, gidx) => (
                <div key={gidx} className="space-y-5">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                    {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((sub, sidx) => {
                      const isExternal = !!sub.href && /^https?:\/\//.test(sub.href);
                      return (
                        <li key={sidx}>
                          {isExternal ? (
                            <a
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/item flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-indigo-50 text-indigo-500 group-hover/item:bg-indigo-100 group-hover/item:text-[#02A5E6] transition-colors">
                                {sub.icon}
                              </span>
                              <span className="text-sm font-medium text-slate-600 group-hover/item:text-slate-900">
                                {sub.label}
                              </span>
                            </a>
                          ) : (
                            <Link
                              to={sub.href || '#'}
                              className="group/item flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-indigo-50 text-[#02A5E6] group-hover/item:bg-indigo-100 group-hover/item:[#02A5E6] transition-colors">
                                {sub.icon}
                              </span>
                              <span className="text-sm font-medium text-slate-600 group-hover/item:text-slate-900">
                                {sub.label}
                              </span>
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center bg-slate-50/60 -mx-8 -mb-10 px-8 py-4">
              <div className="flex gap-6 text-xs text-slate-500 font-medium">
                <span>Comprehensive Solutions for the Digital Age</span>
                <span className="w-px h-4 bg-slate-300" />
                <span>24/7 Global Support</span>
              </div>
              <Link to="/services" className="text-sm font-semibold text-[#02A5E6] flex items-center gap-1 hover:gap-2 transition-all">
                View Service Catalog <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* STANDARD Dropdown */}
      {item.type === 'dropdown' && (
        <div
          className={`absolute left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl shadow-slate-200/40 border border-gray-100
            transform transition-all duration-200 origin-top-left overflow-hidden z-50
            ${activeDropdown === item.id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
          role="menu"
          aria-hidden={activeDropdown === item.id ? 'false' : 'true'}
        >
          <div className="p-2 space-y-1">
            {(item.children as SubItem[])?.map((sub, sidx) => {
              const isExternal = !!sub.href && /^https?:\/\//.test(sub.href);
              return isExternal ? (
                <a
                  key={sidx}
                  href={sub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg hover:bg-slate-50 transition-all group/sub"
                  role="menuitem"
                >
                  <div className="flex items-start gap-3">
                    {sub.icon && <div className="mt-0.5 text-slate-400 group-hover/sub:text-[#02A5E6] transition-colors">{sub.icon}</div>}
                    <div>
                      <div className="text-sm font-semibold text-slate-700 group-hover/sub:[#02A5E6]">{sub.label}</div>
                      {/* {sub.description && <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{sub.description}</div>} */}
                    </div>
                  </div>
                </a>
              ) : (
                <Link
                  key={sidx}
                  to={sub.href || '#'}
                  className="block p-3 rounded-lg hover:bg-slate-50 transition-all group/sub"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="flex items-start gap-3">
                    {sub.icon && <div className="mt-0.5 text-slate-400 group-hover/sub:text-[#02A5E6] transition-colors">{sub.icon}</div>}
                    <div>
                      <div className="text-sm font-semibold text-slate-700 group-hover/sub:text-[#02A5E6]">{sub.label}</div>
                      {/* {sub.description && <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{sub.description}</div>} */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  ))}
</nav>


            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* <button className="p-2 text-slate-500 hover:text-[#02A5E6] hover:[#02A5E6] rounded-full transition-colors">
                <Search size={20} />
              </button> */}
              <div className="h-6 w-px bg-slate-200"></div>
              {/* <a
                href="#contact"
                className="px-6 py-2.5 bg-slate-900 hover:bg-[#02A5E6] text-white text-sm font-medium rounded-full transition-colors shadow-lg shadow-slate-200"
              >
                Contact us
              </a> */}


              <Link
                    to="/contact"
                    className="px-6 py-2.5 bg-slate-900 hover:bg-[#02A5E6] text-white text-sm font-medium rounded-full transition-colors shadow-lg shadow-slate-200"
                >
                    Contact us
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (internal) */}
      <>
        <div
          className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`
          fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-out lg:hidden
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <span className="font-bold text-lg text-slate-800">Navigation</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full" aria-label="Close menu"><X size={20} /></button>
          </div>
          <div className="overflow-y-auto h-[calc(100%-80px)] p-4">
<ul className="space-y-1">
  {NAV_ITEMS.map((item) => {
    const isExpanded = expanded.includes(item.id);
    const hasChildren = item.type !== 'link';
    return (
      <li key={item.id} className="border-b border-gray-50 last:border-none">
        {hasChildren ? (
          <div>
            <button
              onClick={() => toggleMobile(item.id)}
              aria-expanded={isExpanded}
              aria-controls={`mobile-sub-${item.id}`}
              className="flex items-center justify-between w-full py-4 text-left text-slate-700 font-medium"
            >
              <span>{item.label}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#02A5E6]' : 'text-slate-400'}`}
              />
            </button>

            {/* Collapsible container: use max-h transition for smoother collapse */}
            <div
              id={`mobile-sub-${item.id}`}
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
              style={{ maxHeight: isExpanded ? '1000px' : '0px' }}
            >
              <div className="bg-slate-50/50 rounded-lg p-2">
                {item.type === 'mega' ? (
                  <div className="p-4 space-y-6">
                    {(item.children as { title: string; items: SubItem[] }[]).map((group, gi) => (
                      <div key={gi}>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          {group.title}
                        </h4>
                        <ul className="space-y-2">
                          {group.items.map((sub, si) => {
                            const isExternal = !!sub.href && /^https?:\/\//.test(sub.href);
                            return (
                              <li key={si}>
                                {isExternal ? (
                                  <a
                                    href={sub.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-slate-600 hover:text-[#02A5E6] py-1"
                                  >
                                    {sub.label}
                                  </a>
                                ) : (
                                  <Link
                                    to={sub.href || '/'}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-sm text-slate-600 hover:text-[#02A5E6] py-1"
                                  >
                                    {sub.label}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-2">
                    {(item.children as SubItem[]).map((sub, i) => {
                      const isExternal = !!sub.href && /^https?:\/\//.test(sub.href);
                      return isExternal ? (
                        <a
                          key={i}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 text-sm text-slate-600 hover:text-[#02A5E6] hover:bg-white rounded-md transition-colors"
                        >
                          <div className="font-medium">{sub.label}</div>
                          {sub.description && <div className="text-xs text-slate-400 mt-0.5">{sub.description}</div>}
                        </a>
                      ) : (
                        <Link
                          key={i}
                          to={sub.href || '/'}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block p-3 text-sm text-slate-600 hover:text-[#02A5E6] hover:bg-white rounded-md transition-colors"
                        >
                          <div className="font-medium">{sub.label}</div>
                          {sub.description && <div className="text-xs text-slate-400 mt-0.5">{sub.description}</div>}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // top-level simple link (no children)
          (/^https?:\/\//.test(item.href || '') ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-4 text-slate-700 font-medium hover:text-[#02A5E6]"
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={item.href || '/'}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 text-slate-700 font-medium hover:text-[#02A5E6]"
            >
              {item.label}
            </Link>
          ))
        )}
      </li>
    );
  })}
</ul>

          </div>
        </div>
      </>
    </>
  );
}
