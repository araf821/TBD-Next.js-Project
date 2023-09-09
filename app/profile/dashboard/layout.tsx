import { getSession } from "@/app/actions/users/getCurrentUser";
import Container from "@/components/Container";
import ProfileInformation from "@/components/dashboard/ProfileInformation";
import prismaClient from "@/lib/prismadb";
import { redirect } from "next/navigation";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();

  if (!session?.user?.email) {
    redirect("/");
  }

  const currentUser = await prismaClient.user.findFirst({
    where: {
      email: session.user.email,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts: {
            where: {
              published: true,
            },
          },
        },
      },
    },
  });

  if (!currentUser) {
    redirect("/");
  }

  return (
    <Container className="py-8">
      <ProfileInformation user={currentUser} />
      {children}
    </Container>
  );
};

export default ProfileLayout;
