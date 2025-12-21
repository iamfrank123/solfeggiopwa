'use client';

import { useTranslation } from '@/context/LanguageContext';

export default function MelodicScreen() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col h-full bg-gradient-to-br from-stone-50 to-stone-100 overflow-hidden">
            <div className="flex-1 overflow-y-auto px-3 py-3 pb-safe">
                <div className="max-w-md mx-auto space-y-4">
                    <div className="text-center space-y-3 pt-8">
                        <span className="text-6xl">🎵</span>
                        <h2 className="text-2xl font-bold text-gray-800">{t('header.melodic_solfege')}</h2>
                        <p className="text-gray-600 text-sm px-4">
                            {t('melodic.subtitle')}
                        </p>
                    </div>

                    <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                        <p className="font-semibold mb-2">{t('melodic.midi_warning_title')}</p>
                        <p className="text-xs">{t('melodic.midi_warning_desc')}</p>
                    </div>

                    {/* Bottom Spacer */}
                    <div className="h-8"></div>
                </div>
            </div>
        </div>
    );
}
