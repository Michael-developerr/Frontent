import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
  DynamicMidulesLoader,
  ReducersList,
} from "shared/lib/components/DynamicMidulesLoader/DynamicMidulesLoader";
import { profileReduser } from "entities/Pofile";

const reducers: ReducersList = {
  profile: profileReduser,
};
interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicMidulesLoader reducers={reducers} removeAfterunmout>
      <div className={classNames("", {}, [className ?? ""])}>
        {t("Profile Page")}
      </div>
    </DynamicMidulesLoader>
  );
};
export default ProfilePage;
