import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService{
  private chordsArray: string[] = [' C maj', ' C min', ' C aug', ' C dim', ' C2', ' Csus4',
    ' F maj', ' F min', ' F aug', ' F dim', ' F2', ' Fsus4',
    ' Bb maj', ' Bb min', ' Bb aug', ' Bb dim', ' Bb2', ' Bbsus4',
    ' Eb maj', ' Eb min', ' Eb aug', ' Eb dim', ' Eb2', ' Ebsus4',
    ' Ab maj', ' Ab min', ' Ab aug', ' Ab dim', ' Ab2', ' Absus4',
    ' Db maj', ' Db min', ' Db aug', ' Db dim', ' Db2', ' Dbsus4',
    ' Gb maj', ' Gb min', ' Gb aug', ' Gb dim', ' Gb2', ' Gbsus4',
    ' B maj', ' B min', ' B aug', ' B dim', ' B2', ' Bsus4',
    ' E maj', ' E min', ' E aug', ' E dim', ' E2', ' Esus4',
    ' A maj', ' A min', ' A aug', ' A dim', ' A2', ' Asus4',
    ' D maj', ' D min', ' D aug', ' D dim', ' D2', ' Dsus4',
    ' G maj', ' G min', ' G aug', ' G dim', ' G2', ' Gsus4'];
  getRandomChord(): string{
    const randomIndex=Math.floor(Math.random() * this.chordsArray.length);
    return this.chordsArray[randomIndex];
  }
}

