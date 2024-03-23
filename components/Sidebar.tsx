import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

// 导入组件
import SidebarSearchField from "@/components/SidebarSearchField";
import SidebarNoteList from "@/components/SidebarNoteList";
import EditButton from "@/components/EditButton";
import { Footer } from "@/components/Footer";
import NoteListSkeleton from "@/components/NoteListSkeleton";
import { useTranslation } from "@/app/i18n";

export default async function Sidebar({
  lng,
}: Readonly<{
  lng: string;
}>) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <section className="col sidebar">
        <Link href={"/"} className="link--unstyled">
          <section className="sidebar-header">
            <Image
              className="logo"
              src="/logo.svg"
              width={22}
              height={20}
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>{" "}
        <Footer lng={lng} />
        <section className="sidebar-menu" role="menubar">
          <SidebarSearchField lng={lng} />
          <EditButton noteId={null}>{t("new")}</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  );
}
