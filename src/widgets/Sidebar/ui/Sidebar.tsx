import { classNames } from 'helpers/classnames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SibebarProps {
    className?: string;
}

export const Sidebar: React.FC<SibebarProps> = ({ className, ...otherProps }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation('sidebar');

    const onToggle = () => setCollapsed((prevState) => !prevState);

    return (
        <div className={classNames(cls.sidebar, { [cls.opened]: collapsed }, [className])} {...otherProps}>
            <button type="button" data-testid="toggleButton" onClick={onToggle}>
                {t('hide sidebar')}
            </button>
        </div>
    );
};
