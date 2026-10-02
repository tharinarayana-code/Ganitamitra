import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { useLanguage } from '../context/LanguageContext';
import { CardRounded } from '../components/ui/CardRounded';
import { Button3D } from '../components/ui/Button3D';
import { BadgeChip } from '../components/ui/BadgeChip';
import { ProgressBar } from '../components/ui/ProgressBar';
import { WardrobeShop } from '../components/profile/WardrobeShop';
import { LanguageSelector } from '../components/ui/LanguageSelector';
import { badgesData } from '../data/avatarShop';
import { User, Award, Shield, Star, Zap, Crown, Flame, Gem, Sparkles, Globe, Volume2, VolumeX, Moon, Sun } from 'lucide-react';

export const Profile = () => {
  const { gameState, toggleSound, toggleVoice, setTheme } = useGame();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('wardrobe'); // 'wardrobe' | 'stats'

  // Evolution Titles
  const evolutionTitle = gameState.level >= 15 ? 'Sovereign Math Master 👑'
    : gameState.level >= 10 ? 'Wizard Mathemagician 🧙'
    : gameState.level >= 5 ? 'Math Knight 🛡️'
    : 'Novice Explorer 🎓';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '100%' }}>
      
      {/* 1. Header Profile Banner */}
      <CardRounded style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--purple) 100%)', color: '#ffffff', padding: '28px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}>
              🎓
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.25)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                {evolutionTitle}
              </span>
              <h2 style={{ fontFamily: 'var(--font-rounded)', fontSize: '2.2rem', fontWeight: '800', marginTop: '6px' }}>
                {t('profile_title')}
              </h2>
              <div style={{ fontSize: '0.95rem', opacity: 0.95, display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                <span>{t('level', { level: gameState.level })}</span>
                <span>•</span>
                <span>{t('header_xp', { xp: gameState.xp })}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '12px 20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', opacity: 0.8 }}>{t('header_gems', { gems: '' }).toUpperCase()}</div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: '#ffc800' }}>💎 {gameState.gems}</div>
            </div>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '12px 20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', opacity: 0.8 }}>STREAK</div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-rounded)', color: '#ff9600' }}>🔥 {gameState.streak}d</div>
            </div>
          </div>
        </div>
      </CardRounded>

      {/* 2. Language & Theme Preferences Settings */}
      <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Theme Switcher Options */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <Sun size={24} color="var(--orange)" />
            <div>
              <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '800', margin: 0 }}>
                {t('profile_dark_theme')} (Theme Mode)
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                Toggle between comfortable Dark Mode for nighttime study and clean Light Mode.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            {/* Light Mode Card */}
            <div
              onClick={() => setTheme('light')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '16px',
                backgroundColor: gameState?.theme !== 'dark' ? 'var(--primary-light)' : 'var(--bg-main)',
                border: gameState?.theme !== 'dark' ? '2.5px solid var(--primary)' : '1.5px solid var(--border-light)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: gameState?.theme !== 'dark' ? 'var(--shadow-sm)' : 'none'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                color: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}>
                <Sun size={24} fill="#f59e0b" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '1rem', color: 'var(--text-main)' }}>
                  Light Theme ☀️
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Crisp & Daylight Bright
                </div>
              </div>
              {gameState?.theme !== 'dark' && (
                <BadgeChip label="Active ✓" color="var(--primary)" bg="var(--bg-card-solid)" size="sm" />
              )}
            </div>

            {/* Dark Mode Card */}
            <div
              onClick={() => setTheme('dark')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '16px',
                backgroundColor: gameState?.theme === 'dark' ? 'rgba(129, 140, 248, 0.15)' : 'var(--bg-main)',
                border: gameState?.theme === 'dark' ? '2.5px solid #818cf8' : '1.5px solid var(--border-light)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: gameState?.theme === 'dark' ? 'var(--shadow-sm)' : 'none'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#1e293b',
                color: '#fcd34d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                <Moon size={24} fill="#fcd34d" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '1rem', color: 'var(--text-main)' }}>
                  Dark Theme 🌙
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Gentle on eyes at night
                </div>
              </div>
              {gameState?.theme === 'dark' && (
                <BadgeChip label="Active ✓" color="#818cf8" bg="#1e1b4b" size="sm" />
              )}
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', margin: '4px 0' }} />

        {/* Language Selection Section */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Globe size={22} color="var(--primary)" />
            <div>
              <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.25rem', fontWeight: '800', margin: 0 }}>
                {t('profile_settings_language')} / {t('select_language')}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                Switch the language for all lessons, quizzes, 3D math labs, and AI tutor interactions.
              </p>
            </div>
          </div>

          <LanguageSelector variant="settings-grid" />
        </div>
      </CardRounded>


      {/* 3. Badges & Achievements Gallery */}
      <CardRounded style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.4rem', fontWeight: '800' }}>
          Trophies & Badges Gallery 🏆
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {badgesData.map(badge => {
            let isUnlocked = (gameState.unlockedBadges || []).includes(badge.id);

            // Dynamic rule checks based on real student activity
            if (badge.id === 'first_lesson') {
              isUnlocked = isUnlocked || (gameState.completedLessons || []).length > 0;
            } else if (badge.id === 'quiz_master') {
              isUnlocked = isUnlocked || (gameState.accuracyHistory || []).some(s => s === 100);
            } else if (badge.id === 'streak_3') {
              isUnlocked = isUnlocked || (gameState.streak || 0) >= 3;
            } else if (badge.id === 'abacus_pro') {
              isUnlocked = isUnlocked || Boolean(gameState.abacusPuzzlesSolved >= 5);
            } else if (badge.id === 'shape_builder') {
              isUnlocked = isUnlocked || Boolean(gameState.visited3DLab);
            } else if (badge.id === 'olympiad_hero') {
              isUnlocked = isUnlocked || (gameState.claimedMissions || []).includes('m_olympiad');
            }

            const tooltipMessage = isUnlocked
              ? "🎉 Badge Unlocked! Great job!"
              : "🔒 Complete the course to unlock this badge!";

            return (
              <div
                key={badge.id}
                title={tooltipMessage}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-main)',
                  border: isUnlocked ? '2px solid var(--secondary)' : '1.5px solid var(--border-light)',
                  opacity: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontSize: '2.2rem' }}>{badge.icon}</div>
                  <div>
                    <div style={{ fontWeight: '800', fontFamily: 'var(--font-rounded)', fontSize: '0.98rem', color: 'var(--text-main)' }}>
                      {badge.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{badge.desc}</div>
                  </div>
                </div>

                {/* Status tag */}
                <div style={{
                  fontSize: '0.73rem',
                  fontWeight: '800',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  backgroundColor: isUnlocked ? 'rgba(34, 197, 94, 0.12)' : 'rgba(245, 158, 11, 0.15)',
                  color: isUnlocked ? '#16a34a' : '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '4px'
                }}>
                  {isUnlocked ? '✅ Unlocked' : '🔒 Complete the course to unlock'}
                </div>
              </div>
            );
          })}
        </div>
      </CardRounded>

      {/* 4. Avatar Wardrobe & Customization Shop */}
      <WardrobeShop />

    </div>
  );
};

