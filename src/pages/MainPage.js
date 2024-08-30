import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export default function MainPage() {
  return (
    <Container>
      <Header />
      <ContentArea>
        {/* 대량의 텍스트 컨텐츠 추가 */}
        <div>
          <h1>Welcome to My Website</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </p>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor dignissim. Maecenas mattis.
            Sed convallis tristique sem. Proin ut ligula vel nunc lacinia
            malesuada. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Phasellus blandit leo ut odio facilisis imperdiet.
            Vestibulum dapibus nunc ac augue ultricies, nec dignissim est
            varius.
          </p>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit
            non mi porta gravida at eget metus. Donec id elit non mi porta
            gravida at eget metus. Donec id elit non mi porta gravida at eget
            metus. Donec id elit non mi porta gravida at eget metus. Donec id
            elit non mi porta gravida at eget metus.
          </p>
          <p>
            Vestibulum id ligula porta felis euismod semper. Vestibulum id
            ligula porta felis euismod semper. Vestibulum id ligula porta felis
            euismod semper. Vestibulum id ligula porta felis euismod semper.
            Vestibulum id ligula porta felis euismod semper. Vestibulum id
            ligula porta felis euismod semper.
          </p>
          <p>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
            nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
            ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </p>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor dignissim. Maecenas mattis.
            Sed convallis tristique sem. Proin ut ligula vel nunc lacinia
            malesuada. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Phasellus blandit leo ut odio facilisis imperdiet.
            Vestibulum dapibus nunc ac augue ultricies, nec dignissim est
            varius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </p>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor dignissim. Maecenas mattis.
            Sed convallis tristique sem. Proin ut ligula vel nunc lacinia
            malesuada. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Phasellus blandit leo ut odio facilisis imperdiet.
            Vestibulum dapibus nunc ac augue ultricies, nec dignissim est
            varius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </p>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor dignissim. Maecenas mattis.
            Sed convallis tristique sem. Proin ut ligula vel nunc lacinia
            malesuada. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Phasellus blandit leo ut odio facilisis imperdiet.
            Vestibulum dapibus nunc ac augue ultricies, nec dignissim est
            varius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </p>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor dignissim. Maecenas mattis.
            Sed convallis tristique sem. Proin ut ligula vel nunc lacinia
            malesuada. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Phasellus blandit leo ut odio facilisis imperdiet.
            Vestibulum dapibus nunc ac augue ultricies, nec dignissim est
            varius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </p>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor dignissim. Maecenas mattis.
            Sed convallis tristique sem. Proin ut ligula vel nunc lacinia
            malesuada. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Phasellus blandit leo ut odio facilisis imperdiet.
            Vestibulum dapibus nunc ac augue ultricies, nec dignissim est
            varius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </p>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor dignissim. Maecenas mattis.
            Sed convallis tristique sem. Proin ut ligula vel nunc lacinia
            malesuada. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Phasellus blandit leo ut odio facilisis imperdiet.
            Vestibulum dapibus nunc ac augue ultricies, nec dignissim est
            varius.
          </p>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor dignissim. Maecenas mattis.
            Sed convallis tristique sem. Proin ut ligula vel nunc lacinia
            malesuada. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Phasellus blandit leo ut odio facilisis imperdiet.
            Vestibulum dapibus nunc ac augue ultricies, nec dignissim est
            varius.
          </p>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor dignissim. Maecenas mattis.
            Sed convallis tristique sem. Proin ut ligula vel nunc lacinia
            malesuada. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Phasellus blandit leo ut odio facilisis imperdiet.
            Vestibulum dapibus nunc ac augue ultricies, nec dignissim est
            varius.
          </p>
        </div>
      </ContentArea>
      <Footer />
    </Container>
  );
}
