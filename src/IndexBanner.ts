export class IndexBanner {
  success: string;
  msg: string;
  banner: [
    {
      title: string;
      content: string;
      img: string;
    }
  ];

  constructor(response: any) {
    this.success = response.success;
    this.msg = response.msg;
    this.banner = response.banner;
  }
}
