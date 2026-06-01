import { Award, FileBadge, School } from 'lucide-react';
import React from 'react';

const Education = () => {
  return (
    <div className='container mx-auto dark'>
      <h2 className="sr-only">Academic qualifications with dark glassmorphism big feature cards</h2>

      <div className="g-root">
        <div className="g-scene bg-white">
          <div className="g-orb g-orb-1"></div>
          <div className="g-orb g-orb-2"></div>
          <div className="g-orb g-orb-3"></div>

          <div className="g-top">
            <p className="g-overline">// education record</p>
            <h2 className="g-title">Academic <em>qualifications</em></h2>
          </div>

          <div className="g-cards">

            <div className="g-card v-purple">
              <div className="g-noise"></div>
              <div className="g-card-glow"></div>
              <div className="g-card-top">
                <div className="g-icon-wrap"><School /> </div>
                <span className="g-year-badge">2024 — Ongoing</span>
              </div>
              <p className="g-level">Bachelor's degree (BSS) </p>
              <p className="g-degree">Political Science</p>
              <p className="g-field">Social Science track</p>
              <hr className="g-sep" />
              <div className="g-inst">
                <div className="g-inst-init">NU</div>
                <div>
                  <p className="g-inst-name">National University</p>
                  <p className="g-inst-loc"><i className="ti ti-map-pin" style={{ fontSize: '11px', verticalAlign: '-1px', marginRight: '3px' }} aria-hidden="true"></i>Gazipur, Bangladesh</p>
                </div>
              </div>

              {/* <div className="g-stats">
                  <div className="g-stat">
                    <p className="g-stat-label">CGPA</p>
                    <p className="g-stat-val">3.72</p>
                    <p className="g-stat-sub">/ 4.00</p>
                  </div>
                  <div className="g-stat">
                    <p className="g-stat-label">Duration</p>
                    <p className="g-stat-val">4 yr</p>
                    <p className="g-stat-sub">8 semesters</p>
                  </div>
                </div> */}
              {/* <div className="g-tags">
                <span className="g-tag">DSA</span>
                <span className="g-tag">OS</span>
                <span className="g-tag">Networks</span>
                <span className="g-tag">Compilers</span>
                <span className="g-tag">Databases</span>
              </div> */}

              {/* <div className="g-honor"><i className="ti ti-award" aria-hidden="true"></i> Dean's list — 2024, 2025</div> */}
            </div>

            <div className="g-card v-teal">
              <div className="g-noise"></div>
              <div className="g-card-glow"></div>
              <div className="g-card-top">
                <div className="g-icon-wrap"><FileBadge /></div>
                <span className="g-year-badge">2024 — 2022</span>
              </div>
              <p className="g-level">Higher secondary</p>
              <p className="g-degree">HSC — Humanity</p>
              <p className="g-field">History · Civics · ICT</p>
              <hr className="g-sep" />
              <div className="g-inst">
                <div className="g-inst-init">BGC</div>
                <div>
                  <p className="g-inst-name">Baburhut Greenfield College</p>
                  <p className="g-inst-loc"><i className="ti ti-map-pin" style={{ fontSize: '11px', verticalAlign: '-1px', marginRight: '3px' }} aria-hidden="true"></i>Narsingdi</p>
                </div>
              </div>
              {/* <div className="g-stats">
                <div className="g-stat">
                  <p className="g-stat-label">GPA</p>
                  <p className="g-stat-val">5.00</p>
                  <p className="g-stat-sub">/ 5.00</p>
                </div>
                <div className="g-stat">
                  <p className="g-stat-label">Duration</p>
                  <p className="g-stat-val">2 yr</p>
                  <p className="g-stat-sub">4 semesters</p>
                </div>
              </div> */}
              {/* <div className="g-tags">
                <span className="g-tag">Physics</span>
                <span className="g-tag">Chemistry</span>
                <span className="g-tag">Higher math</span>
                <span className="g-tag">ICT</span>
              </div> */}
              {/* <div className="g-honor">
                <i className="ti ti-award" aria-hidden="true"> </i> Golden GPA — Board merit list
              </div> */}
            </div>

            <div className="g-card v-pink">
              <div className="g-noise"></div>
              <div className="g-card-glow"></div>
              <div className="g-card-top">
                <div className="g-icon-wrap"><Award /></div>
                <span className="g-year-badge">2019 — 2022</span>
              </div>
              <p className="g-level">Secondary school</p>
              <p className="g-degree">SSC — Commerce</p>
              <p className="g-field">Bussiness Study</p>
              <hr className="g-sep" />
              <div className="g-inst">
                <div className="g-inst-init">NHS</div>
                <div>
                  <p className="g-inst-name">Nuralapur High School</p>
                  <p className="g-inst-loc"><i className="ti ti-map-pin" style={{ fontSize: '11px', verticalAlign: '-1px', marginRight: '3px' }} aria-hidden="true"></i>Narsingdi, Dhaka</p>
                </div>
              </div>
              {/*<div className="g-stats">
                 <div className="g-stat">
                  <p className="g-stat-label">GPA</p>
                  <p className="g-stat-val">5.00</p>
                  <p className="g-stat-sub">/ 5.00</p>
                </div> 
                <div className="g-stat">
                  <p className="g-stat-label">Duration</p>
                  <p className="g-stat-val">2 yr</p>
                  <p className="g-stat-sub">4 semesters</p>
                </div>
              </div>*/}
              {/* <div className="g-tags">
                <span className="g-tag">Mathematics</span>
                <span className="g-tag">Physics</span>
                <span className="g-tag">Chemistry</span>
                <span className="g-tag">Biology</span>
              </div> */}
              {/* <div className="g-honor"><i className="ti ti-award" aria-hidden="true"></i> Talentpool scholarship</div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;