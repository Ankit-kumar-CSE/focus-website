import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { LEGAL_CONTENT } from '../../data/legalData'
import { TermsContent, PrivacyContent, LicensesContent } from '../../data/legalContent'

const SUPPORT_EMAIL = 'ankitjaat00010@gmail.com'

// Cross-links between the three legal documents, shown as a sub-nav.
const TABS = [
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms & Conditions' },
  { path: '/licenses', label: 'Third-Party Licenses' },
]

// Map each legal doc type to its renderer component.
const RENDERERS = {
  terms: TermsContent,
  privacy: PrivacyContent,
  licenses: LicensesContent,
}

// type: 'terms' | 'privacy' | 'licenses'
const LegalPage = ({ type }) => {
  const location = useLocation()
  const data = LEGAL_CONTENT[type]
  const Content = RENDERERS[type]

  return (
    <div className='max-w-3xl mx-auto px-6 py-12'>
      {/* Back to home */}
      <Link
        to='/'
        className='inline-flex items-center gap-1.5 text-[#4a5568] hover:text-[#00f5d4] text-xs font-medium transition-colors mb-6'
      >
        <ArrowLeft className='w-3.5 h-3.5' />
        Back to home
      </Link>

      {/* Title card */}
      <div className='relative rounded-2xl border border-[#1a2d4a] shadow-2xl overflow-hidden mb-6'
           style={{ background: 'linear-gradient(135deg, #0a1628 0%, #071428 100%)' }}>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#00f5d4]/60 to-transparent' />
        <div className='px-6 py-6'>
          <h1 className='text-white font-bold text-2xl'>{data.title}</h1>
          <p className='text-[#4a5568] text-xs mt-1'>Effective Date: {data.effectiveDate}</p>
        </div>

        {/* Sub-nav: switch between legal documents */}
        <div className='flex gap-1 px-6 pb-4 flex-wrap'>
          {TABS.map((tab) => {
            const isActive = location.pathname === tab.path
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  isActive
                    ? 'bg-[#00f5d4]/10 text-[#00f5d4] border border-[#00f5d4]/30'
                    : 'text-[#4a5568] hover:text-[#a0acc2] hover:bg-[#1a2d4a] border border-transparent'
                }`}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Document body */}
      <div className='px-1'>
        <Content data={data} />
      </div>

      {/* Footer bar */}
      <div className='flex items-center justify-between gap-4 mt-10 pt-5 border-t border-[#1a2d4a] flex-wrap'>
        <p className='text-[#4a5568] text-xs'>
          Questions?{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className='text-[#00f5d4] hover:underline'>
            {SUPPORT_EMAIL}
          </a>
        </p>
        <Link
          to='/'
          className='px-4 py-2 rounded-lg bg-[#00f5d4]/10 border border-[#00f5d4]/30 text-[#00f5d4] text-xs font-medium hover:bg-[#00f5d4]/20 transition-colors'
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default LegalPage
