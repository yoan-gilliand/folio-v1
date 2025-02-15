import React from 'react';
import initTranslations from '../i18n';
import TranslationProvider from './TranslationProvider';

const i18nNamespaces = ['translation'];

export default async function Layout({ children, params }: { children: React.ReactNode; params:  Promise<{ locale: string }>}) {
    const { locale } = await params;
    const { resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
            {children}
        </TranslationProvider>
    );
}