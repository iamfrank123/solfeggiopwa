'use client';

import { useTranslation } from '@/context/LanguageContext';

export default function ChallengeScreen() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col h-full bg-gradient-to-br from-stone-50 to-stone-100 overflow-hidden">
            <div className="flex-1 overflow-y-auto px-3 py-3 pb-safe">
                <div className="max-w-md mx-auto space-y-4">
                    <div className="text-center space-y-3 pt-8">
                        <span className="text-6xl">🏆</span>
                        <h2 className="text-2xl font-bold text-gray-800">{t('header.challenge')}</h2>
                        <p className="text-gray-600 text-sm px-4">
                            {t('challenge.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-sm shadow-sm">
                            <p className="text-gray-700">{t('challenge.midi_info')}</p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-sm shadow-sm">
                            <p className="text-gray-700">{t('challenge.mouse_info')}</p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-sm shadow-sm">
                            <p className="text-gray-700">{t('challenge.touch_info')}</p>
                        </div>
                    </div>

                    {/* Bottom Spacer */}
                    <div className="h-8"></div>
                </div>
            </div>
        </div>
    );
}
