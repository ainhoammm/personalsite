import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


// ICONS:
import { FeatherModule } from 'angular-feather';
import { AtSign, Mail, MapPin, Phone, User, Printer, BookOpen, Briefcase, Clipboard, Download, ThumbsUp, Camera, Heart, Linkedin, Github } from 'angular-feather/icons';

const icons = {
  AtSign,
  Mail,
  MapPin,
  Phone,
  User,
  Printer,
  BookOpen,
  Briefcase,
  Clipboard,
  ThumbsUp,
  Download,
  Camera,
  Heart,
  Linkedin,
  Github
};


@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons),
    TranslateModule,
    CommonModule
  ],
  exports: [
    FeatherModule,
    TranslateModule
  ]
})
export class SharedModule { }
