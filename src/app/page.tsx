import { KJButton } from '@/components';
import { Title } from '@mantine/core';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Title order={1}>Welcome Onboard!</Title>
        <h1 className="font-title text-h1">Welcome Onboard!</h1>
        <p className="font-display border-4 p-8 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          doloremque culpa quam earum hic excepturi laborum nobis voluptate
          eaque quas fugit mollitia cupiditate, quae nesciunt itaque iusto
          fugiat quod veniam! Officia suscipit amet distinctio commodi maxime
          non asperiores illo dolores sunt in quo, ea odio aliquam blanditiis et
          praesentium saepe porro earum harum obcaecati recusandae molestiae
          eligendi? Iure, adipisci similique? Consequatur provident illo rem,
          harum aliquid laudantium, obcaecati velit qui perspiciatis sit,
          suscipit officia cupiditate repellendus voluptatibus ipsa accusantium
          ducimus. Necessitatibus provident fugiat nulla molestias maiores
          ipsam, tempora blanditiis aliquam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio asperiores amet iure ex sunt ab
          libero reprehenderit cum, quo nesciunt corrupti dolorum, non rerum
          vitae reiciendis quibusdam veniam? Aperiam, voluptatibus? Harum
          numquam veritatis perferendis repudiandae nemo dolorem aut odit
          architecto nam quidem quibusdam velit placeat labore quisquam,
          accusamus quasi. Ducimus quis ipsum impedit enim. Animi quod sapiente
          incidunt eligendi molestiae? Perferendis dolorem deserunt laboriosam
          dolorum? Ipsum, corporis consequatur, consectetur eius laboriosam
          autem sit possimus dolorum sapiente sequi quidem commodi neque modi
          iste ea praesentium dolore est? Iste eius inventore dolorum?
          Consequuntur vero quas ducimus illo? Deserunt porro vitae laborum
          possimus cum architecto eveniet quam fugiat voluptatibus nisi.
          Quibusdam explicabo rerum magnam laboriosam, quaerat minima
          consequuntur beatae nesciunt ipsam at optio.
        </p>
        <KJButton color="royal-blue.2" c="black">
          Click Me
        </KJButton>
      </div>
    </main>
  );
}
