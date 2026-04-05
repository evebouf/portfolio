import React, { useEffect, useState } from 'react';

const ArrowLink: React.FC<{ href: string }> = ({ href }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        flexShrink: 0,
        textDecoration: 'none',
        color: hovered ? '#1a1a18' : '#c8c5c0',
        transition: 'color 0.2s ease, transform 0.2s ease',
        transform: hovered ? 'translate(1px, -1px)' : 'translate(0, 0)',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
};

interface Task {
  rank: number;
  task: string;
  department: string;
  responses: string;
  url: string;
}

// Source: Canada.ca Top 50 Tasks (April 2024 – March 2025)
// https://design.canada.ca/about/top-tasks-for-canada-ca.html
const topTasks: Task[] = [
  { rank: 1, task: 'Apply for a work permit', department: 'IRCC', responses: '41,380', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html' },
  { rank: 2, task: 'Check your application status', department: 'IRCC', responses: '26,797', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html' },
  { rank: 3, task: 'Access My Account', department: 'CRA', responses: '25,179', url: 'https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html' },
  { rank: 4, task: 'Check online mail', department: 'CRA', responses: '23,775', url: 'https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html' },
  { rank: 5, task: 'Apply for a visitor visa', department: 'IRCC', responses: '23,610', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html' },
  { rank: 6, task: 'File a personal tax return', department: 'CRA', responses: '18,673', url: 'https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html' },
  { rank: 7, task: 'Immigrate through Express Entry', department: 'IRCC', responses: '15,256', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html' },
  { rank: 8, task: 'View or download T4 and other tax slips', department: 'CRA', responses: '12,434', url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips.html' },
  { rank: 9, task: 'Apply for an eTA', department: 'IRCC', responses: '12,365', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html' },
  { rank: 10, task: 'Submit an EI report', department: 'ESDC', responses: '10,630', url: 'https://www.canada.ca/en/services/benefits/ei/ei-internet-reporting.html' },
  { rank: 11, task: 'Renew a Canadian passport', department: 'IRCC', responses: '9,925', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/renew-adult-passport.html' },
  { rank: 12, task: 'Sign in to My Service Canada Account', department: 'ESDC', responses: '9,838', url: 'https://www.canada.ca/en/employment-social-development/services/my-account.html' },
  { rank: 13, task: 'Apply for Canadian citizenship', department: 'IRCC', responses: '8,759', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen.html' },
  { rank: 14, task: 'Get a notice of assessment', department: 'CRA', responses: '8,516', url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/notice-assessment-understand.html' },
  { rank: 15, task: 'Apply for a study permit', department: 'IRCC', responses: '7,803', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html' },
  { rank: 16, task: 'Apply for Employment Insurance', department: 'ESDC', responses: '6,519', url: 'https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/apply.html' },
  { rank: 17, task: 'Check processing times', department: 'IRCC', responses: '6,322', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html' },
  { rank: 18, task: 'IRCC accounts — sign in and register', department: 'IRCC', responses: '6,018', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html' },
  { rank: 19, task: 'Check EI claim status', department: 'ESDC', responses: '5,959', url: 'https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/apply.html' },
  { rank: 20, task: 'Find TFSA contribution limit', department: 'CRA', responses: '5,734', url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account.html' },
  { rank: 21, task: 'Jobs in the federal public service', department: 'PSC', responses: '5,623', url: 'https://www.canada.ca/en/services/jobs/opportunities/government.html' },
  { rank: 22, task: 'File a GST/HST return', department: 'CRA', responses: '5,441', url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html' },
  { rank: 23, task: 'Contact IRCC', department: 'IRCC', responses: '4,701', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc.html' },
  { rank: 24, task: 'Benefits for people with disabilities', department: 'ESDC', responses: '4,503', url: 'https://www.canada.ca/en/services/benefits/disability.html' },
  { rank: 25, task: 'Find out when to expect tax refund', department: 'CRA', responses: '4,391', url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/refunds.html' },
  { rank: 26, task: 'Canadian Dental Care Plan', department: 'ESDC', responses: '4,320', url: 'https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html' },
  { rank: 27, task: 'Find a job in the private sector', department: 'ESDC', responses: '4,265', url: 'https://www.jobbank.gc.ca/' },
  { rank: 28, task: 'View MSCA payment information', department: 'ESDC', responses: '4,173', url: 'https://www.canada.ca/en/employment-social-development/services/my-account.html' },
  { rank: 29, task: 'Make a payment to the CRA', department: 'CRA', responses: '3,641', url: 'https://www.canada.ca/en/revenue-agency/services/make-a-payment-canada-revenue-agency.html' },
  { rank: 30, task: 'Immigrate as a provincial nominee', department: 'IRCC', responses: '3,579', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html' },
  { rank: 31, task: 'Sponsor family members to immigrate', department: 'IRCC', responses: '3,379', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html' },
  { rank: 32, task: 'Weather forecasts and alerts', department: 'ECCC', responses: '3,238', url: 'https://weather.gc.ca/' },
  { rank: 33, task: 'Canada Child Benefit', department: 'CRA', responses: '3,048', url: 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html' },
  { rank: 34, task: 'Find tax deductions and credits', department: 'CRA', responses: '2,906', url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html' },
  { rank: 35, task: 'Find RRSP contribution limit', department: 'CRA', responses: '2,843', url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans.html' },
  { rank: 36, task: 'Check passport application status', department: 'IRCC', responses: '2,761', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/check-passport-application-status.html' },
  { rank: 37, task: 'Old Age Security payment amounts', department: 'ESDC', responses: '2,747', url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments.html' },
  { rank: 38, task: 'Calculate payroll deductions', department: 'CRA', responses: '2,729', url: 'https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/payroll-deductions-online-calculator.html' },
  { rank: 39, task: 'Pension payment dates', department: 'ESDC', responses: '2,598', url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/payment-dates.html' },
  { rank: 40, task: 'Open a CRA My Account', department: 'CRA', responses: '2,565', url: 'https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html' },
  { rank: 41, task: 'Apply for a new Canadian passport', department: 'IRCC', responses: '2,532', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html' },
  { rank: 42, task: 'Get or renew a permanent resident card', department: 'IRCC', responses: '2,517', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card.html' },
  { rank: 43, task: 'Find a government policy or guideline', department: 'TBS', responses: '2,448', url: 'https://www.canada.ca/en/government/system/laws.html' },
  { rank: 44, task: 'Register for MSCA', department: 'ESDC', responses: '2,413', url: 'https://www.canada.ca/en/employment-social-development/services/my-account.html' },
  { rank: 45, task: 'Disability tax credit', department: 'CRA', responses: '2,370', url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit.html' },
  { rank: 46, task: 'File an employer T4 Summary', department: 'CRA', responses: '2,365', url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/completing-filing-information-returns.html' },
  { rank: 47, task: 'Check CPP payment information', department: 'ESDC', responses: '2,336', url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp.html' },
  { rank: 48, task: 'Travel advice and advisories', department: 'GAC', responses: '2,161', url: 'https://travel.gc.ca/travelling/advisories' },
  { rank: 49, task: 'Access My Business Account', department: 'CRA', responses: '2,160', url: 'https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/business-account.html' },
  { rank: 50, task: 'Sign up for direct deposit', department: 'CRA / PSPC', responses: '2,125', url: 'https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/direct-deposit.html' },
];

const deptColors: Record<string, string> = {
  'IRCC': '#1a1a18',
  'CRA': '#6b6963',
  'ESDC': '#9b9a97',
  'ECCC': '#9b9a97',
  'PSC': '#9b9a97',
  'TBS': '#9b9a97',
  'GAC': '#9b9a97',
  'CRA / PSPC': '#9b9a97',
};

const deptFullNames: Record<string, string> = {
  'IRCC': 'Immigration, Refugees and Citizenship Canada',
  'CRA': 'Canada Revenue Agency',
  'ESDC': 'Employment and Social Development Canada',
  'ECCC': 'Environment and Climate Change Canada',
  'PSC': 'Public Service Commission',
  'TBS': 'Treasury Board Secretariat',
  'GAC': 'Global Affairs Canada',
  'CRA / PSPC': 'CRA / Public Services and Procurement Canada',
};

const CanadaDesignStudio: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  // Group by department for the summary
  const deptCounts: Record<string, number> = {};
  topTasks.forEach(t => {
    const dept = t.department;
    deptCounts[dept] = (deptCounts[dept] || 0) + 1;
  });
  const deptSorted = Object.entries(deptCounts).sort((a, b) => b[1] - a[1]);

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#9b9a97',
    lineHeight: '28px',
  };

  return (
    <>
    <style>{`
      .task-row {
        transition: background-color 0.15s ease;
        margin: 0 -8px;
        padding-left: 8px !important;
        padding-right: 8px !important;
        border-radius: 4px;
      }
      .task-row:hover {
        background-color: rgba(0, 0, 0, 0.03);
        cursor: pointer;
      }
      .task-row:hover .task-arrow {
        color: #1a1a18 !important;
        transform: translate(1px, -1px);
      }
    `}</style>
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FAFAF8',
      color: '#1a1a18',
      fontFamily: "'IBM Plex Mono', monospace",
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 100,
    }}>
      <div style={{ width: 800, paddingTop: 84 }}>
        <div style={{ marginBottom: 28 }}>
          <a href="/ideas" style={{
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            color: '#9b9a97',
            textDecoration: 'none',
          }}>
            &larr; Ideas
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 0 28px' }}>
          <img src="/maple-leaf.png" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          <h1 style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: '28px',
            margin: 0,
          }}>
            National Design Studio for Canada
          </h1>
        </div>

        <p style={{
          fontSize: 13,
          lineHeight: '28px',
          color: '#6b6963',
          marginBottom: 28,
          maxWidth: 560,
        }}>
          What if Canada had a National Design Studio? Redesigning the most-used
          federal websites, starting with the services that touch the most people:
          immigration, taxes, and benefits.
        </p>

        {/* ── Context: US National Design Studio ── */}
        <div style={{ borderTop: '1px solid #e0ddd8', padding: '27px 0', borderBottom: '1px solid #e0ddd8', marginBottom: 0 }}>
          <div style={{ ...labelStyle, marginBottom: 28 }}>
            Context: The US Approach
          </div>
          <div style={{ fontSize: 13, color: '#6b6963', lineHeight: '28px', maxWidth: 560 }}>
            <p style={{ margin: '0 0 28px' }}>
              In August 2025, the White House established the National Design Studio
              through the "America by Design" executive order. Joe Gebbia (Airbnb co-founder)
              was appointed as the first National Design Officer.
            </p>
            <p style={{ margin: '0 0 28px' }}>
              The challenge: 27,000 federal .gov websites. Only 6% are mobile-friendly.
              The approach is to start by hand-redesigning the ten most-visited sites,
              then use a strict design system and AI-driven deployment to scale across
              the remaining thousands. Target team: 15 engineers and 15 designers.
              Initial results due by July 4, 2026.
            </p>
            <p style={{ margin: '0 0 28px' }}>
              Canada tried this once already. In 2012, the federal government launched a
              plan to consolidate all government sites under a single domain: canada.ca.
              By 2017, the effort was largely abandoned. Only a handful of departments
              actually moved over (CRA being the most notable). Most agencies still run
              their own .gc.ca domains with their own designs: weather.gc.ca, jobbank.gc.ca,
              statcan.gc.ca, travel.gc.ca. An unfinished migration.
            </p>
            <p style={{ margin: 0 }}>
              The surface is loosely unified (same header, same footer) but the actual
              experience of completing tasks is still rough. Only 23% of federal services
              were available end-to-end online as of 2021. The opportunity isn't starting
              from scratch. It's finishing what was started and doing it well.
            </p>
          </div>
        </div>

        {/* ── Department breakdown ── */}
        <div style={{ borderTop: '1px solid #e0ddd8', padding: '27px 0', borderBottom: '1px solid #e0ddd8', marginBottom: 0 }}>
          <div style={{ ...labelStyle, marginBottom: 28 }}>
            By Department — Top 50 Tasks
          </div>
          {deptSorted.map(([dept, count]) => (
            <div key={dept} style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 12,
              lineHeight: '28px',
            }}>
              <span style={{ fontSize: 14, fontWeight: 500, width: 100, flexShrink: 0 }}>{dept}</span>
              <span style={{ fontSize: 12, color: '#9b9a97', flex: 1 }}>{deptFullNames[dept]}</span>
              <span style={{ fontSize: 12, color: '#c8c5c0', flexShrink: 0 }}>{count} tasks</span>
            </div>
          ))}
        </div>

        {/* ── Full task list ── */}
        <div style={{ padding: '27px 0', borderBottom: '1px solid #e0ddd8' }}>
          <div style={{ ...labelStyle, marginBottom: 28 }}>
            Top 50 Tasks — Ranked by Survey Responses
          </div>
          <div style={{ fontSize: 10, color: '#c8c5c0', lineHeight: '28px', marginBottom: 28, letterSpacing: '0.05em' }}>
            Source: Canada.ca (April 2024 – March 2025)
          </div>
          {topTasks.map((t) => (
            <a
              key={t.rank}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="task-row"
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 12,
                lineHeight: '28px',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <span style={{
                fontSize: 13,
                fontWeight: t.rank <= 10 ? 500 : 400,
                color: t.rank <= 10 ? '#1a1a18' : '#6b6963',
                flex: 1,
              }}>
                <span style={{ fontSize: 10, color: '#c8c5c0', marginRight: 8 }}>{t.rank}</span>
                {t.task}
              </span>
              <span style={{
                fontSize: 11,
                color: '#9b9a97',
                width: 70,
                flexShrink: 0,
                textAlign: 'right',
              }}>
                {t.department}
              </span>
              <span style={{
                fontSize: 11,
                color: '#c8c5c0',
                width: 60,
                flexShrink: 0,
                textAlign: 'right',
              }}>
                {t.responses}
              </span>
              <span className="task-arrow" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                flexShrink: 0,
                color: '#c8c5c0',
                transition: 'color 0.2s ease, transform 0.2s ease',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* ── Notes ── */}
        <div style={{ padding: '27px 0' }}>
          <div style={{ ...labelStyle, marginBottom: 28 }}>
            Notes
          </div>
          <div style={{ fontSize: 13, color: '#6b6963', lineHeight: '28px' }}>
            Three departments own nearly all top tasks: IRCC (immigration), CRA (taxes),
            and ESDC/Service Canada (employment, pensions, benefits). A Canadian National
            Design Studio would get maximum impact by focusing on these three portals first.
          </div>
        </div>

        {/* ── Sources ── */}
        <div style={{ padding: '27px 0', borderTop: '1px solid #e0ddd8' }}>
          <div style={{ ...labelStyle, marginBottom: 28 }}>
            Sources
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { title: 'Top tasks for Canada.ca', url: 'https://design.canada.ca/about/top-tasks-for-canada-ca.html' },
              { title: 'Canada.ca analytics', url: 'https://www.canada.ca/en/analytics.html' },
              { title: 'NDS looks to overhaul 27,000 federal websites — Federal News Network', url: 'https://federalnewsnetwork.com/it-modernization/2026/01/national-design-studio-looks-to-overhaul-27000-federal-websites-and-is-hiring-a-team-to-do-it/' },
              { title: 'The National Design Studio: Modernizing Federal Websites — FedTech', url: 'https://fedtechmagazine.com/article/2026/04/national-design-studio-what-america-design-order-sets-motion-perfcon' },
              { title: 'Improving Our Nation Through Better Design — Executive Order', url: 'https://www.whitehouse.gov/presidential-actions/2025/08/improving-our-nation-through-better-design/' },
              { title: 'Overview of the Government\'s Digital Service Transformation — PBO', url: 'https://www.pbo-dpb.ca/en/publications/RP-2324-013-M--overview-government-digital-service-transformation--apercu-transformation-numerique-services-gouvernementaux' },
              { title: 'Departments and agencies — Canada.ca', url: 'https://www.canada.ca/en/government/dept.html' },
            ].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                fontSize: 12,
                color: '#9b9a97',
                lineHeight: '28px',
                textDecoration: 'underline',
                textDecorationColor: 'rgba(0,0,0,0.12)',
                textUnderlineOffset: 3,
              }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CanadaDesignStudio;
